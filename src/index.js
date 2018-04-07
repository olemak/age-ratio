import sanitizeHtml from "sanitize-html";
import { calculator } from "./calculator";

function inputChange(event) {
    calculator[event.target.id] = parseInt(event.target.value);
    window.output.innerHTML = sanitizeHtml(`<p>${calculator.ratio}</p>`);
}

(() => {
    function init() {
        window.age1.addEventListener("change", inputChange);
        window.age2.addEventListener("change", inputChange);
    }
    if (document.readyState !== "loading") {
        init();
    } else {
        document.addEventListener("DOMContentLoaded", init);
    }
})();
