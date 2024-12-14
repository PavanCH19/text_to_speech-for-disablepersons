import { useState, useRef } from 'react';

const TextToSpeech = () => {
    const [rate, setRate] = useState(1);
    const textRef = useRef(null); // Reference to the HTML element
    const [speechInstance, setSpeechInstance] = useState(null); // Store SpeechSynthesis instance

    // Function to trigger speech synthesis
    const textToSpeech = () => {
        const textContent = textRef.current?.innerText;
        if (!textContent) {
            console.log("No text content to read.");
            return;
        }

        console.log("Text content to read:", textContent); // Debug: Check the content

        const speech = new SpeechSynthesisUtterance(textContent); // Create SpeechSynthesisUtterance with text content
        speech.rate = rate; // Set rate based on the slider
        speech.onstart = () => console.log("Speech started"); // Debug: Speech started
        speech.onend = () => console.log("Speech ended"); // Debug: Speech ended
        speech.onerror = (event) => {
            console.error('Speech synthesis error:', event);
        };

        // Optionally set language and voice if necessary
        speech.lang = 'en-US'; // You can change this based on the language you need

        // Save the instance to state
        setSpeechInstance(speech);

        window.speechSynthesis.speak(speech);
    };

    // Function to pause the speech
    const pauseSpeech = () => {
        if (speechInstance) {
            window.speechSynthesis.pause();
        }
    };

    // Function to resume the speech
    const resumeSpeech = () => {
        if (speechInstance) {
            window.speechSynthesis.resume();
        }
    };

    // Function to restart the speech
    const restartSpeech = () => {
        if (speechInstance) {
            window.speechSynthesis.cancel(); // Cancel the current speech
            textToSpeech(); // Restart the speech from the beginning
        }
    };

    return (
        <div>
            {/* This div's content will be read aloud */}
            <div ref={textRef}>
                <div>
                    <header>
                        <h1>Introduction to Artificial Intelligence</h1>
                    </header>

                    <section className="intro">
                        <h2>What is Artificial Intelligence (AI)?</h2>
                        <p>
                            Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think, learn, and perform tasks typically requiring human intelligence. AI systems are designed to solve problems, recognize patterns, understand language, and even exhibit decision-making abilities.
                        </p>
                    </section>

                    <section className="concepts">
                        <h2>Key Concepts in AI</h2>
                        <p><strong>Machine Learning (ML):</strong> A subset of AI that focuses on developing algorithms that allow machines to learn from data.</p>
                        <p><strong>Natural Language Processing (NLP):</strong> AIs ability to understand, interpret, and generate human language.</p>
                        <p><strong>Computer Vision:</strong> The ability of machines to interpret and understand visual data from the world.</p>
                        <p><strong>Robotics:</strong> AI in robotics involves machines that can perceive and act autonomously or semi-autonomously.</p>
                        <p><strong>Deep Learning:</strong> A subset of machine learning using neural networks to analyze large datasets.</p>
                    </section>

                    <section className="applications">
                        <h2>Real-World Applications of AI</h2>
                        <p><strong>Healthcare:</strong> AI is used for diagnostics, drug discovery, and personalized medicine.</p>
                        <p><strong>Finance:</strong> AI helps with fraud detection, trading algorithms, and personalized banking services.</p>
                        <p><strong>Autonomous Vehicles:</strong> AI powers self-driving cars, allowing them to make decisions in real-time.</p>
                        <p><strong>Customer Service:</strong> AI-driven chatbots provide instant support and information.</p>
                        <p><strong>Entertainment:</strong> AI-driven recommendation systems are used in platforms like Netflix and YouTube.</p>
                    </section>

                    <section className="ethics">
                        <h2>Ethical Considerations</h2>
                        <p>As AI continues to evolve, there are important ethical concerns:</p>
                        <p><strong>Bias and Fairness:</strong> AI systems can inherit biases from the data they are trained on, leading to unfair outcomes.</p>
                        <p><strong>Privacy:</strong> AI systems often handle vast amounts of personal data, raising concerns about privacy and data security.</p>
                        <p><strong>Job Displacement:</strong> Automation powered by AI may lead to job losses in certain industries.</p>
                        <p><strong>Accountability:</strong> Determining responsibility when AI systems make mistakes or cause harm.</p>
                    </section>
                </div>
            </div>

            <button onClick={textToSpeech}>Read Aloud</button>
            <button onClick={pauseSpeech}>Pause</button>
            <button onClick={resumeSpeech}>Resume</button>
            <button onClick={restartSpeech}>Restart</button>

            {/* Speed slider */}
            <div>
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

            <style>{`
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
                    padding: 20px 0;
                }

                h1 {
                    margin: 0;
                    font-size: 2.5em;
                }

                h2 {
                    color: #4CAF50;
                    margin-top: 0;
                }

                section {
                    padding: 20px;
                    margin: 20px;
                    background-color: #fff;
                    border-radius: 8px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }

                footer {
                    text-align: center;
                    padding: 10px 0;
                    background-color: #333;
                    color: white;
                    font-size: 0.9em;
                }

                /* Media Queries for Responsive Design */
                @media (max-width: 768px) {
                    h1 {
                        font-size: 2em;
                    }

                    section {
                        margin: 10px;
                    }
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
                    margin-right: 10px;
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
            `}</style>
        </div>
    );
};

export default TextToSpeech;
