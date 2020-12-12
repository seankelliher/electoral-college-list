//Monitor "main" for clicks.
//If "state" div clicked, add "select" class.
//Makes text grey, line-through.

import {tallyVotes} from "./tally.js";

function highlightClicked() {
    "use strict";

    //Get the main element.
    const main = document.querySelector("main");

    //Add an event listener.
    main.addEventListener("click", function (event) {

        //Get the target's parent and grandparent.
        const parent = event.target.parentElement;
        const gparent = parent.parentElement;
        const gparentClassList = gparent.classList; //section element.

        //Check if click happened within <div class="state">.
        //You only want something to happen if user clicks on a state.
        if (parent.className === "state") {

            //Add or remove "selects" class.
            if (gparentClassList.contains("selects") === false) {
                gparentClassList.add("selects");

                //Invoke the tallyVotes function.
                tallyVotes();

            } else if (gparentClassList.contains("selects") === true) {
                gparentClassList.remove("selects");

                //Invoke the tallyVotes function.
                tallyVotes();
            }
        }
    });
}

export {highlightClicked};