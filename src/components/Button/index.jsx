import "./styles.css";

export const Button = ({ text, onClick, disabled }) => (
	<button onClick={onClick} className="button" disabled={disabled}>
		{text}
	</button>
);
