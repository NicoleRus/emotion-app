import './App.scss';
import InputForm from '../src/components/input-field/input-field.js';
import EmojiCard from './components/emoji-card/emoji-card';

function App() {
  let emojis = [
    'happy',
    'sad',
    'angry',
    'scared',
    'tired',
    'surprised',
  ]

  return (
    <div>
      <div className="heading">
        <h1>Find Your Emotion</h1>
      </div>
      <div className="content">
        <InputForm />
      </div>
      <div className="emoji-cards">
        {
          emojis.map((item, k) => (
            <EmojiCard emotion={item} key={k}></EmojiCard>
          ))
        }
      </div>
    </div>
  );
}

export default App;
