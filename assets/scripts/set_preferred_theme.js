const preferred_theme = () => {
    if (localStorage.getItem("fem-project-theme")) {
        return localStorage.getItem("fem-project-theme");
    }
    else {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            return "dark";
        }

        else {return "light"}
    }
}

document.documentElement.dataset.theme = preferred_theme();