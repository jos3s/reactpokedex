let windowsDark = window.matchMedia("(prefers-color-scheme:dark").matches;

export const setLocalTheme = (theme = "light") => {
  localStorage.setItem("@pokedex-app/theme", theme);
};

export const getLocalTheme = () => {
  let theme = localStorage.getItem("@pokedex-app/theme");
  console.log(theme);
  if (theme === "light" || theme === "darker") {
    return theme;
  } else if (
    (windowsDark && theme === "darker") ||
    (!windowsDark && theme === "darker") ||
    (windowsDark && theme == null)
  ) {
    setLocalTheme("darker");
    return "darker";
  }
};
