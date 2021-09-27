import './App.css';
import InputForm from '../src/components/input-field/input-field.js';

function App() {
  return (
    <div>
      <div className="heading">
        <h1>Find Your Emotion</h1>
      </div>
      <div className="content">
        <InputForm />
      </div>
    </div>
  );
}

export default App;
