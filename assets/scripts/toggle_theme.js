const theme_toggles = document.forms.toggle.elements.toggle_buttons;

theme_toggles.forEach((toggle) =>  {
    // If a theme has been set, ensure its radio button is checked
    let theme = document.documentElement.dataset.theme;
    if (theme && theme == toggle.value) {
        toggle.checked = true;
    }

    // Then listen for changes
    toggle.addEventListener("change", () => {
        new_theme = toggle.value;
        document.documentElement.dataset.theme = new_theme;
        localStorage.setItem("fem-project-theme", new_theme);
    });
});
