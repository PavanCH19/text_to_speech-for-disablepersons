import '../App.css'
import { Link } from 'react-router-dom';  // Import Link to navigate to routes

function Home() {
    return (
        <div className="home">
            <h2>Welcome to the Speech Interaction App</h2>
            <h4>Any more details</h4>

            {/* Card Container */}
            <div className="card-container">

                {/* Card 1: Text-to-Speech */}
                <div className="card">
                    <h3>AI text_to_speech</h3>
                    <Link to="/text-to-speech">
                        <button className="card-btn">Go to Text-to-Speech</button>
                    </Link>
                </div>

                {/* Card 2: AI Speech-to-Text */}
                <div className="card">
                    <h3>web development text_to_speech</h3>
                    <Link to="/ai-speech-to-text">
                        <button className="card-btn">Go to AI Text-to-Speech</button>
                    </Link>
                </div>

                {/* Card 3: Chinese Speech-to-Text */}
                <div className="card">
                    <h3>Computer network text_to_speech</h3>
                    <Link to="/cn-speech-to-text">
                        <button className="card-btn">Go to CN Text-to-Speech</button>
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default Home;
