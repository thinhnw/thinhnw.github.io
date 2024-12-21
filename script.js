document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;
  const themeIcon = themeToggle.querySelector('i');

  function setTheme(theme) {
      htmlElement.setAttribute('data-bs-theme', theme);
      localStorage.setItem('theme', theme);
      themeIcon.className = theme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
  }

  themeToggle.addEventListener('click', function () {
      const currentTheme = htmlElement.getAttribute('data-bs-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
  });

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
      setTheme(savedTheme);
  }

  // Dynamically update the year in the footer
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
