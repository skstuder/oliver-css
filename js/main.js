document.addEventListener("DOMContentLoaded", () => {
  let theme = document.querySelector("#theme-select");
  let body = document.body;

  theme.addEventListener("change", () => {
    changeTheme();
  });

  const changeTheme = () => {
    document.body.className = theme.value;
  };
});
