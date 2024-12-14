import { useState, useRef } from 'react';

const TextToSpeech = () => {
    const [rate, setRate] = useState(1);
    const textRef = useRef(null); // Reference to the HTML element

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

        // Set error handling for speech synthesis
        speech.onerror = (event) => {
            console.error('Speech synthesis error:', event);
        };

        // Optionally set language and voice if necessary
        speech.lang = 'en-US'; // You can change this based on the language you need
        window.speechSynthesis.speak(speech);
    };

    return (
        <div>
            {/* This div's content will be read aloud */}
            <div ref={textRef}>
                <div>
                    <header>
                        <h1>Introduction to Computer Networks</h1>
                    </header>

                    <section className="intro">
                        <h2>What is a Computer Network?</h2>
                        <p>
                            A <strong>computer network</strong> is a system of interconnected devices, such as computers, servers, and networked devices, that can communicate with each other and share resources. These resources may include files, printers, and internet connections.
                        </p>
                    </section>

                    <section className="types">
                        <h2>Types of Computer Networks</h2>
                        <p><strong>LAN (Local Area Network):</strong> A network covering a small geographic area, such as a home or office.</p>
                        <p><strong>WAN (Wide Area Network):</strong> A network that spans a large geographic area, such as the internet.</p>
                        <p><strong>MAN (Metropolitan Area Network):</strong> A network that covers a city or a large campus.</p>
                        <p><strong>PAN (Personal Area Network):</strong> A small network typically used for personal devices like phones and tablets.</p>
                        <p><strong>VPN (Virtual Private Network):</strong> A secure network that encrypts data over public networks, often used for remote access.</p>
                    </section>

                    <section className="components">
                        <h2>Key Components of Computer Networks</h2>
                        <p><strong>Routers:</strong> Devices that forward data between different networks, such as connecting a home network to the internet.</p>
                        <p><strong>Switches:</strong> Devices used to connect multiple devices within a LAN, allowing them to communicate.</p>
                        <p><strong>Network Interface Cards (NIC):</strong> Hardware that allows devices to connect to a network.</p>
                        <p><strong>Transmission Media:</strong> Wired (Ethernet cables, fiber optics) or wireless (Wi-Fi, Bluetooth) communication channels for data transmission.</p>
                    </section>

                    <section className="protocols">
                        <h2>Network Protocols</h2>
                        <p><strong>TCP/IP:</strong> A suite of protocols used to route data across the internet, ensuring reliable data delivery.</p>
                        <p><strong>HTTP/HTTPS:</strong> Protocols used for web communication; HTTPS is the secure version.</p>
                        <p><strong>FTP:</strong> File Transfer Protocol used for transferring files between computers over a network.</p>
                        <p><strong>DNS:</strong> Domain Name System that translates website names into IP addresses for navigation.</p>
                    </section>

                    <section className="applications">
                        <h2>Common Uses of Computer Networks</h2>
                        <p><strong>Internet Access:</strong> Connecting to websites and online services.</p>
                        <p><strong>File Sharing:</strong> Sharing documents, images, and other files between devices on the network.</p>
                        <p><strong>Email:</strong> Sending and receiving electronic mail across networks.</p>
                        <p><strong>Remote Work:</strong> Accessing work systems and data from remote locations via networks.</p>
                        <p><strong>Cloud Services:</strong> Using services like Google Drive or Dropbox for storage and collaboration.</p>
                    </section>

                    <section className="security">
                        <h2>Network Security</h2>
                        <p>
                            Network security is essential to protect data and devices from unauthorized access, attacks, and vulnerabilities. Common security measures include:
                        </p>
                        <p><strong>Firewalls:</strong> Devices or software that monitor and block unauthorized network traffic.</p>
                        <p><strong>Encryption:</strong> Securing data by converting it into a format that only authorized parties can read.</p>
                        <p><strong>Antivirus Software:</strong> Programs that detect and remove malware or viruses from networked devices.</p>
                        <p><strong>VPNs:</strong> Secure connections that protect users data and privacy while using public networks.</p>
                    </section>

                    <footer>
                        <p>Information provided by ChatGPT - Introduction to Computer Networks</p>
                    </footer>
                </div>
            </div>

            <button onClick={textToSpeech}>Read Aloud</button>

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
            <style>
                {`
          /* Global Styles */
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f5f5f5;
            color: #333;
          }

          header {
            background-color: #0073e6;
            color: white;
            text-align: center;
            padding: 30px 0;
          }

          header h1 {
            margin: 0;
            font-size: 2.5em;
          }

          h2 {
            color: #0073e6;
          }

          section {
            padding: 20px;
            margin: 20px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          footer {
            text-align: center;
            padding: 15px;
            background-color: #333;
            color: white;
            font-size: 0.9em;
          }

          /* Media Queries for Responsive Design */
          @media (max-width: 768px) {
            header h1 {
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
