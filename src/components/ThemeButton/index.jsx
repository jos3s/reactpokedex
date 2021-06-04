import "./styles.css";

export const ThemeButton = ({ handleClick, theme }) => {
  console.log(handleClick, theme);
  return (
    <button
      onClick={handleClick}
      className="switch-button"
      alt={
        theme === "darker" ? "Switch to light theme" : "Switch to darker theme"
      }
      title={
        theme === "darker" ? "Switch to light theme" : "Switch to darker theme"
      }
    >
      {theme === "darker" ? <span>☀️</span> : <span>🌙</span>}
    </button>
  );
};
