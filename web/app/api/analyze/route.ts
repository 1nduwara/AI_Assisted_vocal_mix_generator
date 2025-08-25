import { NextRequest, NextResponse } from "next/server";
import { spawn } from "child_process";
import { promises as fs } from "fs";
import path from "path";
import os from "os";


export const runtime = "nodejs"; // required to use child_process
export const dynamic = "force-dynamic"; // prevent caching of POST


export async function POST(req: NextRequest) {
    try {
        const form = await req.formData();
        const file = form.get("file") as File | null;
        if (!file) {
            return NextResponse.json({ ok: false, error: "No file uploaded" }, { status: 400 });
        }


        // Persist to temp file
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const tmpPath = path.join(os.tmpdir(), `upload-${Date.now()}.wav`);
        await fs.writeFile(tmpPath, buffer);


        // Resolve Python script path
        const projectRoot = path.resolve(process.cwd(), ".."); // monorepo root
        const scriptPath = path.join(projectRoot, "py", "src", "audio_analyzer.py");


        // Spawn Python (use absolute python path if you rely on venv)
        onst py = spawn(process.platform === "win32" ? "python" : "python3", [scriptPath, tmpPath], {
        cwd: projectRoot,
        env: process.env,
        });


        let stdout = "";
        let stderr = "";
        py.stdout.on("data", (d) => (stdout += d.toString()));
        py.stderr.on("data", (d) => (stderr += d.toString()));


        const exitCode: number = await new Promise((resolve) => {
            py.on("close", resolve);
        });


        await fs.unlink(tmpPath).catch(() => {});


        if (exitCode !== 0) {
            return NextResponse.json({ ok: false, error: stderr || "Python failed" }, { status: 500 });
        }


        let parsed;
        try {
            parsed = JSON.parse(stdout.trim());
        } catch (e) {
            return NextResponse.json({ ok: false, error: "Invalid JSON from analyzer", raw: stdout }, { status: 500 });
        }


        return NextResponse.json(parsed);
    } catch (e: any) {
        return NextResponse.json({ ok: false, error: e.message || String(e) }, { status: 500 });
    }
}