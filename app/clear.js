//Remove "selects" class from sections.
//Resets component.

import {tallyVotes} from "./tally.js";

function clearTheField() {
    "use strict";

    //Retrieve the "clear-all" text.
    const clearAll = document.getElementById("clear-all");

    //Add event listener. If clicked...
    clearAll.addEventListener("click", function () {

        //Gather section elements.
        const sections = document.getElementsByTagName("section");

        //Convert to "real" array.
        const sectionsArray = Array.from(sections);

        //Loop through array. If section contains "selects" class, remove it.
        sectionsArray.forEach(function (section) {
            if (section.classList.contains("selects")) {
                section.classList.remove("selects");
            }

            //Invoke tally fuction. Displays total as "0 votes".
            tallyVotes();
        });
    });
}

export {clearTheField};