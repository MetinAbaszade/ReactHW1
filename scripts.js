

export default function toggleMode(isDarkMode) {

    const sun = document.getElementById("sun");
    const moon = document.getElementById("moon");
    const body = document.body;

    if (isDarkMode) {
        body.style.backgroundColor = "#222";
        moon.style.opacity = 1;
        sun.style.opacity = 0;
        moon.style.animation = "wink 1s ease infinite";
    } else {
        body.style.backgroundColor = "#fff";
        sun.style.opacity = 1;
        moon.style.opacity = 0;
        sun.style.animation = "bounce 1s ease infinite";
    }
}