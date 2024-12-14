import { useState, useRef } from 'react';

const TextToSpeech = () => {
    const [rate, setRate] = useState(1);
    const [isPaused, setIsPaused] = useState(false); // State to track if speech is paused
    const [isSpeaking, setIsSpeaking] = useState(false); // State to track if speech is ongoing
    const speechRef = useRef(null); // Ref to store the speech instance
    const textRef = useRef(null); // Reference to the HTML element

    // Function to trigger speech synthesis
    const textToSpeech = () => {
        const paragraphs = textRef.current?.querySelectorAll('p'); // Get all <p> elements inside the div

        if (!paragraphs) return;

        // Create a new SpeechSynthesisUtterance instance for the entire content
        const fullText = Array.from(paragraphs).map(p => p.innerText).join(' '); // Join all paragraphs into a single string

        const speech = new SpeechSynthesisUtterance(fullText); // Pass the full content to SpeechSynthesisUtterance
        speech.rate = rate; // Set the speaking rate

        // Store the speech instance in a ref to manage it later (pause/resume)
        speechRef.current = speech;

        // Set event listeners for speech end
        speech.onend = () => {
            setIsSpeaking(false); // Speech is finished
            setIsPaused(false); // Reset pause state
        };

        // Start speech
        window.speechSynthesis.speak(speech);
        setIsSpeaking(true); // Mark that speech is ongoing
    };

    // Pause speech
    const pauseSpeech = () => {
        if (window.speechSynthesis.paused) {
            window.speechSynthesis.resume();
            setIsPaused(false);
        } else {
            window.speechSynthesis.pause();
            setIsPaused(true);
        }
    };

    // Restart the speech from the beginning
    const restartSpeech = () => {
        if (speechRef.current) {
            window.speechSynthesis.cancel(); // Cancel any ongoing speech
            textToSpeech(); // Restart speech from the beginning
        }
    };

    return (
        <div className="text-to-speech-container">
            {/* This div's content will be read aloud */}
            <div ref={textRef}>
                <header>
                    <h1>Introduction to Web Development</h1>
                </header>

                <section className="intro">
                    <h2>What is Web Development?</h2>
                    <p>
                        Web development is the process of creating websites and web applications. It involves a variety of tasks, including designing, coding, and deploying websites. The goal of web development is to build user-friendly, functional, and responsive websites that work across different devices and platforms.
                    </p>
                </section>

                <section className="technologies">
                    <h2>Technologies Used in Web Development</h2>
                    <p><strong>HTML (Hypertext Markup Language):</strong> The structure of the web page.</p>
                    <p><strong>CSS (Cascading Style Sheets):</strong> The design and layout of the web page.</p>
                    <p><strong>JavaScript:</strong> The interactivity and dynamic features of the web page.</p>
                    <p><strong>Backend Technologies:</strong> Server-side programming (e.g., Node.js, PHP, Python).</p>
                </section>

                <section className="types">
                    <h2>Types of Web Development</h2>
                    <p>There are three main types of web development:</p>
                    <p><strong>Frontend Development:</strong> Focuses on what users see and interact with in the browser.</p>
                    <p><strong>Backend Development:</strong> Focuses on the server-side logic and database interaction.</p>
                    <p><strong>Full-stack Development:</strong> Involves both frontend and backend development.</p>
                </section>

                <footer>
                    <p>&copy; 2024 Web Development Introduction. All Rights Reserved.</p>
                </footer>
            </div>

            {/* Read Aloud Button */}
            <button className="read-aloud-btn" onClick={textToSpeech} disabled={isSpeaking}>Read Aloud</button>

            {/* Pause Button */}
            <button className="pause-btn" onClick={pauseSpeech} disabled={!isSpeaking}>
                {isPaused ? 'Resume' : 'Pause'}
            </button>

            {/* Restart Button */}
            <button className="restart-btn" onClick={restartSpeech} disabled={!isSpeaking}>Restart</button>

            {/* Speed slider */}
            <div className="slider-container">
                <label>Speed: </label>
                <input
                    type="range"
                    min="0.1"
                    max="2"
                    step="0.1"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                />
                <span>{rate}</span>
            </div>

            {/* Style */}
            <style>
                {`
          /* Global Styles */
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #333;
          }

          header {
            background-color: #4CAF50;
            color: white;
            text-align: center;
            padding: 20px;
          }

          h1 {
            margin: 0;
            font-size: 2.5em;
          }

          section {
            margin: 20px;
            padding: 20px;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }

          h2 {
            font-size: 1.8em;
            color: #333;
          }

          p {
            font-size: 1em;
            line-height: 1.6;
          }

          footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 10px;
            position: fixed;
            bottom: 0;
            width: 100%;
          }

          footer p {
            margin: 0;
            font-size: 0.9em;
          }
            /* Button Styling */
button {
  background-color: #0073e6;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 1.1em;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  text-transform: uppercase;
  margin-top: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Button Hover Effect */
button:hover {
  background-color: #005bb5;
  transform: translateY(-3px); /* Lifting effect on hover */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

/* Speed Slider Container */
div {
  margin-top: 30px;
  text-align: center;
}

/* Speed Slider Label */
label {
  font-size: 1.1em;
  color: #333;
  font-weight: 600;
  margin-right: 10px;
}

/* Slider Input Styling */
input[type="range"] {
  width: 200px;
  height: 10px;
  -webkit-appearance: none;
  appearance: none;
  border-radius: 5px;
  background: linear-gradient(to right, #0073e6 0%, #0073e6 50%, #ddd 50%, #ddd 100%);
  transition: background 0.3s ease;
  margin: 0 10px;
}

/* Slider Thumb Styling */
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  background-color: #0073e6;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

/* Slider Thumb Hover Effect */
input[type="range"]::-webkit-slider-thumb:hover {
  background-color: #005bb5;
}

/* Slider Track for Firefox */
input[type="range"]::-moz-range-track {
  width: 200px;
  height: 10px;
  border-radius: 5px;
  background: linear-gradient(to right, #0073e6 0%, #0073e6 50%, #ddd 50%, #ddd 100%);
}

/* Slider Thumb for Firefox */
input[type="range"]::-moz-range-thumb {
  width: 20px;
  height: 20px;
  background-color: #0073e6;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

/* Value Display for Speed */
span {
  font-size: 1.1em;
  color: #0073e6;
  font-weight: bold;
  margin-left: 10px;
}

        `}
            </style>

        </div>
    );
};

export default TextToSpeech;
