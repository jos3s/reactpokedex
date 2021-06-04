import "./styles.css";

export const Button = ({ text, onClick, disabled, type }) => (
  <button onClick={onClick} className={`button ${type}`} disabled={disabled}>
    {text}
  </button>
);
