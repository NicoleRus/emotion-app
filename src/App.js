import './App.css';
import InputForm from '../src/components/input-field/input-field.js';
import EmojiCard from './components/emoji-card/emoji-card';

function App() {
  return (
    <div>
      <div className="heading">
        <h1>Find Your Emotion</h1>
      </div>
      <div className="content">
        <InputForm />
      </div>
      <div className="emojiCards">
        <EmojiCard emotion="angry"></EmojiCard>
      </div>
    </div>
  );
}

export default App;
