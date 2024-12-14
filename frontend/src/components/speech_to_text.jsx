import { useEffect } from 'react';
import 'regenerator-runtime/runtime';
import { useSpeechRecognition } from 'react-speech-recognition';

const SpeechToText = () => {
    const {
        transcript,
        listening,
        resetTranscript,
        startListening,
        stopListening,
        browserSupportsSpeechRecognition,
    } = useSpeechRecognition();

    // Check for browser support only once (useEffect to handle this)
    useEffect(() => {
        if (!browserSupportsSpeechRecognition) {
            alert("Speech Recognition is not supported in this browser.");
        }
    }, [browserSupportsSpeechRecognition]);

    // Avoid rendering unnecessary information if speech recognition is not supported
    if (!browserSupportsSpeechRecognition) {
        return <p>Speech Recognition is not supported in this browser.</p>;
    }

    // The UI that shows the transcript
    return (
        <div>
            <h1>Speech to Text</h1>
            <p>{listening ? "Listening..." : "Click to start listening"}</p>

            {/* Disable the button if listening or browser doesn't support */}
            <button
                onClick={listening ? stopListening : startListening}
                disabled={listening || !browserSupportsSpeechRecognition}
            >
                {listening ? "Stop Listening" : "Start Listening"}
            </button>

            <button
                onClick={resetTranscript}
                disabled={listening} // Disable reset button while listening
            >
                Reset
            </button>

            <div>
                <h3>Transcript:</h3>
                {/* Display the real-time transcript */}
                <p>{transcript || "No speech detected yet..."}</p>
            </div>
        </div>
    );
};

export default SpeechToText;
