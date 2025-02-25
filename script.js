// Detects user’s system theme preference
const theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = theme === "dark" ? "dark.css" : "light.css";
document.head.appendChild(link);
