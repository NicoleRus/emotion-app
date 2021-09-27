import './input-field.css';

function InputForm() {
  return (
    <form className="input-container">
      <input className="main-word-input" type="text"></input>
      <button className="submit-button" type="submit">Search</button>
    </form>
  );
}

export default InputForm;
