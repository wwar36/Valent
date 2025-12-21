function setAppHeight() {
    const doc = document.documentElement;
    doc.style.setProperty('--app-height', `${window.innerHeight}px`);
}

window.addEventListener('resize', setAppHeight);
window.addEventListener('load', setAppHeight);


window.onload = function() {
    setTimeout(function() {
        window.scrollTo(0, 0);
    }, 0);
};

// Или для одностраничных приложений
history.scrollRestoration = 'manual';