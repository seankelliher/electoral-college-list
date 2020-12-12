//Create elements with data from info.js.

import {electoralCollege} from "./info.js";
import {highlightClicked} from "./highlight.js";

function createEle() {
    "use strict";

    //Loop through array drawn from info.js file.
    electoralCollege.forEach(function (index) {

        //Create section element.
        const sect = document.createElement("section");

        //Create div elements.
        const div1 = document.createElement("div");
        const div2 = document.createElement("div");
        const div3 = document.createElement("div");

        //Create p and button elements.
        const para1 = document.createElement("p");
        const para2 = document.createElement("p");
        const button = document.createElement("button");

        //Assign id to section.
        sect.setAttribute("id", index.identity);

        //Assign class name to divs (for styling).
        div1.setAttribute("class", "votes");
        div2.setAttribute("class", "state");
        div3.setAttribute("class", "w2016");

        //Assign text content to paras and button.
        para1.textContent = index.votes;
        para2.textContent = index.state;
        button.textContent = index.w2016;

        //Assign class, which assigns button color.
        if (index.w2016 === "Clinton") {
            button.classList.add("clinton");
        }
        if (index.w2016 === "Trump") {
            button.classList.add("trump");
        }

        //Append paras and button to divs.
        div1.appendChild(para1);
        div2.appendChild(para2);
        div3.appendChild(button);

        //Append divs to section.
        sect.appendChild(div1);
        sect.appendChild(div2);
        sect.appendChild(div3);

        //Append section to main.
        const main = document.querySelector("main");
        main.appendChild(sect);

    });

    //Invoke the next function.
    highlightClicked();
}

export {createEle};