import Router from "./router";

import "./index.css"

window.addEventListener('hashchange', Router);

document.addEventListener("DOMContentLoaded", () => {
    Router();
});



