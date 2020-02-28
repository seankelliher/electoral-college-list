//Global variable (actually let)
let voteInfo;

//Monitor page, after it loads invoke function.
//You'll need the stylesheet so "window" and load" over "document"
//and "DOMContentLoaded" is a safer bet.
window.addEventListener("load", function () {
    "use strict";

    voteInfo.createEle();
});

//The voteInfo variable (let)
voteInfo = {

    electoralCollege: [
        {
            identity: "alabama",
            state: "Alabama",
            votes: 9,
            w2016: "Trump",
            c2016: "#f44336"
        },
        {
            identity: "alaska",
            state: "Alaska",
            votes: 3,
            w2016: "Trump",
            c2016: "#f44336"
        },
        {
            identity: "arizona",
            state: "Arizona",
            votes: 11,
            w2016: "Trump",
            c2016: "#f44336"
        },
        {
            identity: "arkansas",
            state: "Arkansas",
            votes: 6,
            w2016: "Trump",
            c2016: "#f44336"
        },
        {
            identity: "california",
            state: "California",
            votes: 55,
            w2016: "Clinton",
            c2016: "#03a9f4"
        },
        {
            identity: "colorado",
            state: "Colorado",
            votes: 9,
            w2016: "Clinton",
            c2016: "#03a9f4"
        },
        {
            identity: "connecticut",
            state: "Connecticut",
            votes: 7,
            w2016: "Clinton",
            c2016: "#03a9f4"
        },
        {
            identity: "delaware",
            state: "Delaware",
            votes: 3,
            w2016: "Trump",
            c2016: "#f44336"
        },
        {
            identity: "florida",
            state: "Florida",
            votes: 29,
            w2016: "Trump",
            c2016: "#f44336"
        },
        {
            identity: "georgia",
            state: "Georgia",
            votes: 16,
            w2016: "Trump",
            c2016: "#f44336"
        },
        {
            identity: "hawaii",
            state: "Hawaii",
            votes: 4,
            w2016: "Trump",
            c2016: "#f44336"
        },
        {
            identity: "idaho",
            state: "Idaho",
            votes: 4,
            w2016: "Trump",
            c2016: "#f44336"
        },
        {
            identity: "illinois",
            state: "Illinois",
            votes: 20,
            w2016: "Clinton",
            c2016: "#03a9f4"
        },
        {
            identity: "indiana",
            state: "Indiana",
            votes: 11,
            w2016: "Trump",
            c2016: "#f44336"
        },
        {
            identity: "iowa",
            state: "Iowa",
            votes: 6,
            w2016: "Trump",
            c2016: "#f44336"
        },
        {
            identity: "kansas",
            state: "Kansas",
            votes: 6,
            w2016: "Trump",
            c2016: "#f44336"
        },
        {
            identity: "kentucky",
            state: "Kentucky",
            votes: 8,
            w2016: "Trump",
            c2016: "#f44336"
        },
        {
            identity: "louisiana",
            state: "Louisiana",
            votes: 8,
            w2016: "Trump",
            c2016: "#f44336"
        },
        {
            identity: "maine",
            state: "Maine",
            votes: 4,
            w2016: "Clinton",
            c2016: "#03a9f4"
        },
        {
            identity: "maryland",
            state: "Maryland",
            votes: 10,
            w2016: "Clinton",
            c2016: "#03a9f4"
        },
        {
            identity: "massachusetts",
            state: "Massachusetts",
            votes: 11,
            w2016: "Clinton",
            c2016: "#03a9f4"
        },
        {
            identity: "michigan",
            state: "Michigan",
            votes: 16,
            w2016: "Trump",
            c2016: "#f44336"
        },
        {
            identity: "minnesota",
            state: "Minnesota",
            votes: 10,
            w2016: "Clinton",
            c2016: "#03a9f4"
        },
        {
            identity: "mississippi",
            state: "Mississippi",
            votes: 6,
            w2016: "Trump",
            c2016: "#f44336"
        },
        {
            identity: "missouri",
            state: "Missouri",
            votes: 10,
            w2016: "Trump",
            c2016: "#f44336"
        },
        {
            identity: "montana",
            state: "Montana",
            votes: 3,
            w2016: "Trump",
            c2016: "#f44336"
        },
        {
            identity: "nebraska",
            state: "Nebraska",
            votes: 5,
            w2016: "Trump",
            c2016: "#f44336"
        },
        {
            identity: "nevada",
            state: "Nevada",
            votes: 6,
            w2016: "Clinton",
            c2016: "#03a9f4"
        },
        {
            identity: "newhampshire",
            state: "New Hampshire",
            votes: 4,
            w2016: "Clinton",
            c2016: "#03a9f4"
        },
        {
            identity: "newjersey",
            state: "New Jersey",
            votes: 14,
            w2016: "Clinton",
            c2016: "#03a9f4"
        },
        {
            identity: "newmexico",
            state: "New Mexico",
            votes: 5,
            w2016: "Clinton",
            c2016: "#03a9f4"
        },
        {
            identity: "newyork",
            state: "New York",
            votes: 29,
            w2016: "Clinton",
            c2016: "#03a9f4"
        },
        {
            identity: "northcarolina",
            state: "North Carolina",
            votes: 15,
            w2016: "Trump",
            c2016: "#f44336"
        },
        {
            identity: "northdakota",
            state: "North Dakota",
            votes: 3,
            w2016: "Trump",
            c2016: "#f44336"
        },
        {
            identity: "ohio",
            state: "Ohio",
            votes: 18,
            w2016: "Trump",
            c2016: "#f44336"
        },
        {
            identity: "oklahoma",
            state: "Oklahoma",
            votes: 7,
            w2016: "Trump",
            c2016: "#f44336"
        },
        {
            identity: "oregon",
            state: "Oregon",
            votes: 7,
            w2016: "Clinton",
            c2016: "#03a9f4"
        },
        {
            identity: "pennsylvania",
            state: "Pennsylvania",
            votes: 20,
            w2016: "Trump",
            c2016: "#f44336"
        },
        {
            identity: "rhodeisland",
            state: "Rhode Island",
            votes: 4,
            w2016: "Trump",
            c2016: "#f44336"
        },
        {
            identity: "southcarolina",
            state: "South Carolina",
            votes: 9,
            w2016: "Trump",
            c2016: "#f44336"
        },
        {
            identity: "southdakota",
            state: "South Dakota",
            votes: 3,
            w2016: "Trump",
            c2016: "#f44336"
        },
        {
            identity: "tennessee",
            state: "Tennessee",
            votes: 11,
            w2016: "Trump",
            c2016: "#f44336"
        },
        {
            identity: "texas",
            state: "Texas",
            votes: 38,
            w2016: "Trump",
            c2016: "#f44336"
        },
        {
            identity: "utah",
            state: "Utah",
            votes: 6,
            w2016: "Trump",
            c2016: "#f44336"
        },
        {
            identity: "vermont",
            state: "Vermont",
            votes: 3,
            w2016: "Clinton",
            c2016: "#03a9f4"
        },
        {
            identity: "virginia",
            state: "Virginia",
            votes: 13,
            w2016: "Clinton",
            c2016: "#03a9f4"
        },
        {
            identity: "washington",
            state: "Washington",
            votes: 12,
            w2016: "Clinton",
            c2016: "#03a9f4"
        },
        {
            identity: "washingtondc",
            state: "Washington DC",
            votes: 3,
            w2016: "Trump",
            c2016: "#f44336"
        },
        {
            identity: "westvirginia",
            state: "West Virginia",
            votes: 5,
            w2016: "Trump",
            c2016: "#f44336"
        },
        {
            identity: "wisconsin",
            state: "Wisconsin",
            votes: 10,
            w2016: "Trump",
            c2016: "#f44336"
        },
        {
            identity: "wyoming",
            state: "Wyoming",
            votes: 3,
            w2016: "Trump",
            c2016: "#f44336"
        }
    ],

    //Create the elements.
    createEle: function () {
        "use strict";

        //For each function.
        voteInfo.electoralCollege.forEach(function (index) {

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

            //Assign bg color to button.
            button.style.backgroundColor = index.c2016;

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
        voteInfo.highlightClicked();
    },

    highlightClicked: function () {
        "use strict";

        //Get the main element.
        const main = document.querySelector("main");

        //Add an event listener.
        main.addEventListener("click", function (event) {

            //Get the target's parent and grandparent.
            const parent = event.target.parentElement;
            const gparent = parent.parentElement;
            const gparentClassList = gparent.classList;

            //Check if click happened within <div class="state">.
            //You only want something to happen if user clicks on a state.
            if (parent.className === "state") {

                //Add or remove "selects" class.
                if (gparentClassList.contains("selects") === false) {
                    gparentClassList.add("selects");

                    //Invoke the tallyVotes function.
                    voteInfo.tallyVotes();

                } else if (gparentClassList.contains("selects") === true) {
                    gparentClassList.remove("selects");

                    //Invoke the tallyVotes function.
                    voteInfo.tallyVotes();
                }
            }
        });

    },

    tallyVotes: function () {
        "use strict";

        //Gather all "votes" classes within "selects" classes.
        const votes = document.querySelectorAll(".selects .votes");

        //Get the element where vote total is placed.
        const sumText = document.getElementById("sum-text");

        //If user unclicks to nothings selected, show this message.
        if (!votes || !votes.length) {
            sumText.textContent = "Click a state!";
        } else {

            //Otherwise...

            //Transform "votes" node list into real array.
            const texts = Array.from(votes, (vote) => vote.textContent);

            //Convert strings to numbers.
            const num = texts.map((text) => Number(text));

            //Add numbers using reduce.
            const sum = num.reduce((acc, val) => acc + val);

            //Place the result.
            sumText.textContent = sum + " votes";

            //If less than 270 votes, make "vote total" button gray.
            //If 270 votes or more (victory), make "vote total" button gold.
            if (sum < 270) {
                sumText.style.backgroundColor = "#F5F5F5";
            } else if (sum >= 270) {
                sumText.style.backgroundColor = "#FFE082";
            }
        }
    }

}; //close voteInfo