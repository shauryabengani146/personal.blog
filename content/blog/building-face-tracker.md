---
title: "Building a Real-Time Face & Hand Tracker with MediaPipe"
date: "2026-06-25"
description: "A technical breakdown of how I built CyberVision — a real-time face and sign language tracker using MediaPipe, React, and Python."
tags: ["Python", "AI", "MediaPipe", "Computer Vision"]
---

# Building a Real-Time Face & Hand Tracker

One of my favorite projects is **CyberVision** — a real-time AI tracker that detects faces and interprets sign language gestures using your webcam.

## The Challenge

Building real-time computer vision in the browser is tricky. You need:

- Low-latency video processing
- Accurate landmark detection
- Smooth rendering at 30+ FPS

## The Solution

I used **MediaPipe** by Google — a framework that provides pre-trained ML models optimized for real-time inference:

```python
import mediapipe as mp

mp_hands = mp.solutions.hands
hands = mp_hands.Hands(
    static_image_mode=False,
    max_num_hands=2,
    min_detection_confidence=0.7
)
```

The frontend is built with React, streaming webcam frames to the detection pipeline and rendering landmarks as an overlay.

## Key Takeaways

1. **MediaPipe is incredibly fast** — sub-20ms inference on modern hardware
2. **WebRTC + Canvas** is the ideal combo for browser-based CV
3. **Gesture classification** requires careful training data curation

Check out the [live demo](https://shauryabengani146.github.io/faceandhandtracker/) to try it yourself!
