//Gather "selects" elements.
//Tally votes. Display result.

function tallyVotes() {
    "use strict";

    //Gather all "votes" classes within "selects" classes.
    const votes = document.querySelectorAll(".selects .votes");

    //Get the element where vote total is placed.
    const sumText = document.getElementById("sum-text");

    //If user unclicks to nothings selected, show this message.
    if (!votes || !votes.length) {
        sumText.textContent = "0 votes";
    } else {

        //Otherwise...

        //Transform "votes" node list into real array.
        const texts = Array.from(votes, (vote) => vote.textContent);

        //Convert strings to numbers.
        const num = texts.map((text) => Number(text));

        //Add numbers using reduce.
        const sum = num.reduce((acc, val) => acc + val);

        //Place the result. Make button visible.
        sumText.textContent = sum + " votes";
        sumText.style.visibility = "visible";

        //Total button text color changes at 270 votes and above.
        if (sum < 270) {
            sumText.style.color = "#FFF";
        } else if (sum >= 270) {
            sumText.style.color = "#A0CED9";
        }
    }
}

export {tallyVotes};