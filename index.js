import {createEle} from "./app/elements.js";
import {clearTheField} from "./app/clear.js";

//When page loads, invoke functions.
window.addEventListener("load", function () {
    "use strict";

    createEle();
    clearTheField();
});