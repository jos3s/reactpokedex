import "./styles.css";

export const Tag = ({ type, children }) => (
	<div className={`tag ${type}`}>{children}</div>
);
