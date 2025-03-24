const storageKey = "theme";

const getColorPreference = () => {
  return (
    localStorage.getItem(storageKey) ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light")
  );
};

const reflectPreference = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
};

const setPreference = (theme) => {
  localStorage.setItem(storageKey, theme);
  reflectPreference(theme);
};

const onClick = () => {
  const newTheme =
    document.documentElement.getAttribute("data-theme") === "light"
      ? "dark"
      : "light";
  setPreference(newTheme);
};

// Inicializa o tema
let theme = getColorPreference();
reflectPreference(theme);

window.onload = () => {
  document.querySelector("#theme-toggle").addEventListener("click", onClick);
};

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", ({ matches: isDark }) => {
    const newTheme = isDark ? "dark" : "light";
    setPreference(newTheme);
  });
