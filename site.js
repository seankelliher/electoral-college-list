//Global variable (actually let)
let voteInfo;

//Monitor page, after it loads invoke function.
//You'll need the stylesheet so "window" and load" over "document"
//and "DOMContentLoaded" is a safer bet.
window.addEventListener("load", function () {
    "use strict";

    voteInfo.createParas();
});

//The voteInfo variable (let)
voteInfo = {

    electoralCollege: [
        {
            identity: "alabama",
            state: "Alabama",
            votes: 9,
            w2016: "Donald Trump",
            c2016: "#f44336"
        },
        {
            identity: "alaska",
            state: "Alaska",
            votes: 3,
            w2016: "Donald Trump",
            c2016: "#f44336"
        },
        {
            identity: "arizona",
            state: "Arizona",
            votes: 11,
            w2016: "Donald Trump",
            c2016: "#f44336"
        },
        {
            identity: "arkansas",
            state: "Arkansas",
            votes: 6,
            w2016: "Donald Trump",
            c2016: "#f44336"
        },
        {
            identity: "california",
            state: "California",
            votes: 55,
            w2016: "Hillary Clinton",
            c2016: "#03a9f4"
        },
        {
            identity: "colorado",
            state: "Colorado",
            votes: 9,
            w2016: "Hillary Clinton",
            c2016: "#03a9f4"
        },
        {
            identity: "connecticut",
            state: "Connecticut",
            votes: 7,
            w2016: "Hillary Clinton",
            c2016: "#03a9f4"
        },
        {
            identity: "delaware",
            state: "Delaware",
            votes: 3,
            w2016: "Donald Trump",
            c2016: "#f44336"
        },
        {
            identity: "florida",
            state: "Florida",
            votes: 29,
            w2016: "Donald Trump",
            c2016: "#f44336"
        },
        {
            identity: "georgia",
            state: "Georgia",
            votes: 16,
            w2016: "Donald Trump",
            c2016: "#f44336"
        },
        {
            identity: "hawaii",
            state: "Hawaii",
            votes: 4,
            w2016: "Donald Trump",
            c2016: "#f44336"
        },
        {
            identity: "idaho",
            state: "Idaho",
            votes: 4,
            w2016: "Donald Trump",
            c2016: "#f44336"
        },
        {
            identity: "illinois",
            state: "Illinois",
            votes: 20,
            w2016: "Hillary Clinton",
            c2016: "#03a9f4"
        },
        {
            identity: "indiana",
            state: "Indiana",
            votes: 11,
            w2016: "Donald Trump",
            c2016: "#f44336"
        },
        {
            identity: "iowa",
            state: "Iowa",
            votes: 6,
            w2016: "Donald Trump",
            c2016: "#f44336"
        },
        {
            identity: "kansas",
            state: "Kansas",
            votes: 6,
            w2016: "Donald Trump",
            c2016: "#f44336"
        },
        {
            identity: "kentucky",
            state: "Kentucky",
            votes: 8,
            w2016: "Donald Trump",
            c2016: "#f44336"
        },
        {
            identity: "louisiana",
            state: "Louisiana",
            votes: 8,
            w2016: "Donald Trump",
            c2016: "#f44336"
        },
        {
            identity: "maine",
            state: "Maine",
            votes: 4,
            w2016: "Hillary Clinton",
            c2016: "#03a9f4"
        },
        {
            identity: "maryland",
            state: "Maryland",
            votes: 10,
            w2016: "Hillary Clinton",
            c2016: "#03a9f4"
        },
        {
            identity: "massachusetts",
            state: "Massachusetts",
            votes: 11,
            w2016: "Hillary Clinton",
            c2016: "#03a9f4"
        },
        {
            identity: "michigan",
            state: "Michigan",
            votes: 16,
            w2016: "Donald Trump",
            c2016: "#f44336"
        },
        {
            identity: "minnesota",
            state: "Minnesota",
            votes: 10,
            w2016: "Hillary Clinton",
            c2016: "#03a9f4"
        },
        {
            identity: "mississippi",
            state: "Mississippi",
            votes: 6,
            w2016: "Donald Trump",
            c2016: "#f44336"
        },
        {
            identity: "missouri",
            state: "Missouri",
            votes: 10,
            w2016: "Donald Trump",
            c2016: "#f44336"
        },
        {
            identity: "montana",
            state: "Montana",
            votes: 3,
            w2016: "Donald Trump",
            c2016: "#f44336"
        },
        {
            identity: "nebraska",
            state: "Nebraska",
            votes: 5,
            w2016: "Donald Trump",
            c2016: "#f44336"
        },
        {
            identity: "nevada",
            state: "Nevada",
            votes: 6,
            w2016: "Hillary Clinton",
            c2016: "#03a9f4"
        },
        {
            identity: "newhampshire",
            state: "New Hampshire",
            votes: 4,
            w2016: "Hillary Clinton",
            c2016: "#03a9f4"
        },
        {
            identity: "newjersey",
            state: "New Jersey",
            votes: 14,
            w2016: "Hillary Clinton",
            c2016: "#03a9f4"
        },
        {
            identity: "newmexico",
            state: "New Mexico",
            votes: 5,
            w2016: "Hillary Clinton",
            c2016: "#03a9f4"
        },
        {
            identity: "newyork",
            state: "New York",
            votes: 29,
            w2016: "Hillary Clinton",
            c2016: "#03a9f4"
        },
        {
            identity: "northcarolina",
            state: "North Carolina",
            votes: 15,
            w2016: "Donald Trump",
            c2016: "#f44336"
        },
        {
            identity: "northdakota",
            state: "North Dakota",
            votes: 3,
            w2016: "Donald Trump",
            c2016: "#f44336"
        },
        {
            identity: "ohio",
            state: "Ohio",
            votes: 18,
            w2016: "Donald Trump",
            c2016: "#f44336"
        },
        {
            identity: "oklahoma",
            state: "Oklahoma",
            votes: 7,
            w2016: "Donald Trump",
            c2016: "#f44336"
        },
        {
            identity: "oregon",
            state: "Oregon",
            votes: 7,
            w2016: "Hillary Clinton",
            c2016: "#03a9f4"
        },
        {
            identity: "pennsylvania",
            state: "Pennsylvania",
            votes: 20,
            w2016: "Donald Trump",
            c2016: "#f44336"
        },
        {
            identity: "rhodeisland",
            state: "Rhode Island",
            votes: 4,
            w2016: "Donald Trump",
            c2016: "#f44336"
        },
        {
            identity: "southcarolina",
            state: "South Carolina",
            votes: 9,
            w2016: "Donald Trump",
            c2016: "#f44336"
        },
        {
            identity: "southdakota",
            state: "South Dakota",
            votes: 3,
            w2016: "Donald Trump",
            c2016: "#f44336"
        },
        {
            identity: "tennessee",
            state: "Tennessee",
            votes: 11,
            w2016: "Donald Trump",
            c2016: "#f44336"
        },
        {
            identity: "texas",
            state: "Texas",
            votes: 38,
            w2016: "Donald Trump",
            c2016: "#f44336"
        },
        {
            identity: "utah",
            state: "Utah",
            votes: 6,
            w2016: "Donald Trump",
            c2016: "#f44336"
        },
        {
            identity: "vermont",
            state: "Vermont",
            votes: 3,
            w2016: "Hillary Clinton",
            c2016: "#03a9f4"
        },
        {
            identity: "virginia",
            state: "Virginia",
            votes: 13,
            w2016: "Hillary Clinton",
            c2016: "#03a9f4"
        },
        {
            identity: "washington",
            state: "Washington",
            votes: 12,
            w2016: "Hillary Clinton",
            c2016: "#03a9f4"
        },
        {
            identity: "washingtondc",
            state: "Washington DC",
            votes: 3,
            w2016: "Donald Trump",
            c2016: "#f44336"
        },
        {
            identity: "westvirginia",
            state: "West Virginia",
            votes: 5,
            w2016: "Donald Trump",
            c2016: "#f44336"
        },
        {
            identity: "wisconsin",
            state: "Wisconsin",
            votes: 10,
            w2016: "Donald Trump",
            c2016: "#f44336"
        },
        {
            identity: "wyoming",
            state: "Wyoming",
            votes: 3,
            w2016: "Donald Trump",
            c2016: "#f44336"
        }
    ],

    //Create the p and span elements.
    createParas: function () {
        "use strict";

        //For each function.
        voteInfo.electoralCollege.forEach(function (index) {

            //Create p element.
            const para = document.createElement("p");

            //Create span elements.
            const span1 = document.createElement("span");
            const span2 = document.createElement("span");
            const span3 = document.createElement("span");

            //Assign class name to spans (for styling).
            span1.setAttribute("class", "votes-style");
            span2.setAttribute("class", "state-style");
            span3.setAttribute("class", "w2016-style");

            //Assign ids to each element.
            span1.id = index.identity + "-votes";
            span2.id = index.identity + "-state";
            span3.id = index.identity + "-w2016";

            //Set background color for state span.
            //span2.style.backgroundColor = "transparent";

            //Assign text content to span elements.
            span1.textContent = index.votes;
            span2.textContent = index.state;
            span3.textContent = index.w2016;
            span3.style.backgroundColor = index.c2016; //test

            //Join spans and p element.
            para.appendChild(span1);
            para.appendChild(span2);
            para.appendChild(span3);

            //Join main and p element.
            const main = document.querySelector("main");
            main.appendChild(para);

        });

        //Invoke the next function.
        voteInfo.highlightClicked();
    },

    highlightClicked: function () {
        "use strict";

        //Get the states group.
        const main = document.getElementsByTagName("main")[0];

        //Add an event listener.
        main.addEventListener("click", function (event) {

            const columnTest = event.target.classList.contains("state-style");
            const pickTest = event.target.classList.contains("state-picked");
            const targetId = event.target.id;
            const targetLength = targetId.length;
            const targetCore = targetId.substring(0, (targetLength - 5));
            const votesId = targetCore + "votes";
            const getVotesId = document.getElementById(votesId);

            //If target is state...
            //If target contain "picked" class...
            if (columnTest === true) {

                if (pickTest === false) {
                    event.target.classList.add("state-picked");
                    getVotesId.classList.add("votes-picked");
                } else if (pickTest === true) {
                    event.target.classList.remove("state-picked");
                    getVotesId.classList.remove("votes-picked");
                }
            }

            //Invoke the next functions.
            voteInfo.hideNotice();
            voteInfo.tallyVotes();
        });
    },

    hideNotice: function () {
        "use strict";

        //Retrieve the "notice" id and hide it.
        const notice = document.getElementById("notice");
        notice.style.display = "none";
    },

    tallyVotes: function () {
        "use strict";

        //Gather all elements with "picked" class.
        const votesPicked = document.getElementsByClassName("votes-picked");

        //Get the sum-text element.
        const sumText = document.getElementById("sum-text");

        //If not states are picked, make votes zero.
        if (!votesPicked || !votesPicked.length) {
            sumText.textContent = "0";
        } else {
            //Transform picked node list into real array.
            const texts = Array.from(votesPicked, (vote) => vote.textContent);

            //Convert strings to numbers.
            const num = texts.map((text) => Number(text));

            //Add numbers using reduce.
            const sum = num.reduce((acc, val) => acc + val);

            sumText.textContent = sum;
        }

        //Invoke the next functions.
        voteInfo.positionSum();
        voteInfo.repositionSum();
    },

    positionSum: function () {
        "use strict";

        //Remember, client width excludes margins.

        //Get the sum-square element and its width.
        const sumCircle = document.getElementById("sum-square");
        const sumCircleWidth = sumCircle.clientWidth;

        //Get the container element and its width.
        const container = document.getElementById("container");
        const containerWidth = container.clientWidth;

        //Get the window width and height.
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        //Position the sum-square element.

        //Subtract container from window widths. Halve remainder.
        const remainder = windowWidth - containerWidth;
        const remainderHalf = remainder / 2;

        //Get half the container and sum-square width.
        const containerHalf = containerWidth / 2;
        const sumCircleHalf = sumCircleWidth / 2;

        //Calculate the sum-square's position.
        const sumCircleRight = (remainderHalf + containerHalf) - sumCircleHalf;
        const sumCircleTop = windowHeight / 3;

        //Set the sum-square's position.
        sumCircle.style.top = sumCircleTop + "px";
        sumCircle.style.right = sumCircleRight + "px";

        //Make sum-square visible.
        sumCircle.style.visibility = "visible";
    },

    repositionSum: function () {
        "use strict";

        //Monitor the window. If resized, reposition aside element.
        window.addEventListener("resize", function () {
            voteInfo.positionSum();
        });
    }

}; //close voteInfo