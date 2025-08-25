#!/usr/bin/env python3
import argparse, json, sys
import numpy as np
import librosa


# --- Simple key estimation via chroma template matching ---
KEYS = [
"C", "C#", "D", "D#", "E", "F",
"F#", "G", "G#", "A", "A#", "B"
]


MAJOR_TEMPLATE = np.array([6,2,3,2,6,2,3,6,2,3,2,3], dtype=float)
MINOR_TEMPLATE = np.array([6,2,3,6,2,3,2,6,2,3,2,3], dtype=float)




def estimate_key(y, sr):
    chroma = librosa.feature.chroma_stft(y=y, sr=sr)
    chroma_mean = chroma.mean(axis=1)
    chroma_mean /= (chroma_mean.max() + 1e-6)
    best_key, best_mode, best_score = None, None, -1
    for i in range(12):
        maj_score = np.dot(np.roll(MAJOR_TEMPLATE, i), chroma_mean)
        min_score = np.dot(np.roll(MINOR_TEMPLATE, i), chroma_mean)
        if maj_score > best_score:
            best_score, best_key, best_mode = maj_score, KEYS[i], "major"
        if min_score > best_score:
            best_score, best_key, best_mode = min_score, KEYS[i], "minor"
        return f"{best_key} {best_mode.title()}"




def analyze(path):
    y, sr = librosa.load(path, sr=None, mono=True)
    tempo = float(librosa.beat.tempo(y=y, sr=sr, aggregate=np.median))
    key = estimate_key(y, sr)


    # --- Very tiny genre baseline via MFCC stats (POC) ---
    mfcc = librosa.feature.mfcc(y=y, sr=sr, n_mfcc=13)
    features = np.concatenate([mfcc.mean(axis=1), mfcc.std(axis=1)])
    # Placeholder heuristic: tempo & brightness
    spectral_centroid = librosa.feature.spectral_centroid(y=y, sr=sr).mean()
    genre = "pop" if tempo >= 110 and spectral_centroid > 2000 else "other"


    return {
        "bpm": round(tempo, 2),
        "key": key,
        "genre": genre,
        "sr": sr,
        "duration_sec": round(librosa.get_duration(y=y, sr=sr), 2)
    }




if __name__ == "__main__":
    p = argparse.ArgumentParser()
    p.add_argument("audio_path")
    args = p.parse_args()
    try:
        result = analyze(args.audio_path)
        print(json.dumps({"ok": True, "data": result}))
    except Exception as e:
        print(json.dumps({"ok": False, "error": str(e)}))
        sys.exit(1)