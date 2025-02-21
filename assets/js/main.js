

// DARK MODE FUNCTIONALITY
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.createElement("button");
  toggleButton.textContent = "Toggle Dark Mode";
  toggleButton.classList.add("p-2", "bg-gray-200", "dark:bg-gray-800", "rounded");
  
  document.body.appendChild(toggleButton);

  const isDarkMode = localStorage.getItem("theme") === "dark";
  if (isDarkMode) {
      document.documentElement.classList.add("dark");
  }

  toggleButton.addEventListener("click", function () {
      const darkModeEnabled = document.documentElement.classList.toggle("dark");
      localStorage.setItem("theme", darkModeEnabled ? "dark" : "light");
  });
});
// DARK MODE END

