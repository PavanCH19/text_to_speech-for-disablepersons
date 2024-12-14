import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';  // Assuming Home is the main component
import TextToSpeech from './components/text_to_speech'; // Another example component
import Ai_speech_to_text from './components/web_speech_to_text'; // Another component
import Cn_speech_to_text from './components/cn_speech_to_text'; // Another component

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Text-to-Speech App</h1>
        {/* Routing Setup */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/text-to-speech" element={<TextToSpeech />} />
          <Route path="/ai-speech-to-text" element={<Ai_speech_to_text />} />
          <Route path="/cn-speech-to-text" element={<Cn_speech_to_text />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
