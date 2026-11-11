# F660 Voice note to text
Plain name: Voice note to text
Job: Speak into the microphone; see a live transcript as you talk, record the audio, then copy the text or download the recording and a text file.
Input: Microphone for speech recognition and optional recording.
Keeps: Copy the transcript; download the recorded audio (browser-native format, usually WebM) and the transcript as .txt; last transcript and settings saved on the device.
Not on Verse yet: checked against https://a-to-mind.com/llms.txt and GAPS.md — no offline voice note recorder with live local speech-to-text and dual audio/text keep. Speech-to-text and record-voice are open gaps.

**Concept**
A practical offline tool that turns spoken notes into text using the browser's native Web Speech API (local, no server) while optionally recording the raw audio with MediaRecorder. A live canvas waveform visualizer shows the input levels. User starts listening, speaks, sees interim and final transcript, stops, then keeps the result as copyable text, downloadable .txt, and downloadable audio of the recording. Fully self-contained single file, works on phone, nothing sent anywhere, honest about browser support (SpeechRecognition is Chromium-heavy; graceful fallback message).

**Novelty**
First dedicated voice-memo-to-text tool in the frontier series. Combines local Web Speech API recognition (continuous, interim results), MediaRecorder for raw audio capture and audio export, Canvas2D live waveform from AnalyserNode, and localStorage persistence. Departs from prior particle/field/DOM-agent "minds" (F640, F644 etc.) and from pure form tools; delivers a real job people ask for (record and transcribe a note). Not a swarm, lattice, or sealed genome.

**Architecture**
- Single index.html.
- SpeechRecognition (webkitSpeechRecognition) for live transcript.
- MediaRecorder + AudioContext/AnalyserNode for recording and waveform.
- Canvas for real-time time-domain visualizer.
- Buttons: Start/Stop listening, Start/Stop recording, Copy, Download txt, Download audio.
- localStorage for last transcript.
- Progressive: if SpeechRecognition unavailable, still allows recording + manual notes.

**Expected outcome**
User grants mic, speaks a note, sees transcript build, downloads audio + text for later use (meeting notes, ideas, etc.). Useful tool graded by lab-grade.mjs.

Void is now Verse everywhere.
