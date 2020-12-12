[![MIT License on GitHub](https://img.shields.io/github/license/seankelliher/electoral-college-list?style=flat-square)](/LICENSE.txt)
## Electoral College List

Interactive component to calculate Electoral College votes. 

## Project Screen Shots

![screen shot of project](/screenshots/electoral-college-list-screenshot1.jpg)

![screen shot of project](/screenshots/electoral-college-list-screenshot2.jpg)

## Installation and Setup Instructions

This is a static component. All you need is a web browser. However, component uses ES6 modules. Developing locally may require disabling your browser's local file restrictions.

## Reflection

For background, the Electoral College is a voting system to elect the President of the United States. Each state is assigned a certain number of Electoral College votes. If a majority of people in a state vote for a candidate, that candidate gets all the states' Electoral College votes. A candidate who wins enough states to total 270 Electoral College votes wins the election.

I wanted to create a component that lets users test a candidate's potential paths to victory. Users can add or subtract states from a list while the component keeps a running tally of Electoral College votes. The component also signals (via color coding) when the 270 vote threshold is met.

A challenge in creating this was allowing users to scroll through a lengthy list of 50 states while always keeping the tally visible and out of the way - especially important on small screens.

I accomplished this using the CSS property "position: sticky" and media queries to adjust the elements’ positioning as its height changed across viewports.

This approach was easier and more reliable than using the CSS property "position: fixed" and JavaScript to calculate viewport vs element height and width and set positioning.

It was also easier and more reliable than using flexbox with a "column" orientation and a "containing" element's height set to 100%. This approach created a "fixed" element, but it also forced users to scroll inside the "container" to navigate up or down the list. If users scrolled outside the container, nothing happened except frustration. 

Lastly, another challenge was fitting a lot of information on a small screen. I tested over and over with numerous font sizes, button sizes, and media queries to find the right combination.

## Acknowledgments

* Electoral College count from the [National Archives](https://www.archives.gov/federal-register/electoral-college/allocation.html).
* 2016 Presidental Election results from [The New York Times](https://www.nytimes.com/elections/2016/results/president).
* Readme guidance from [Brenna Martenson](https://gist.github.com/martensonbj/6bf2ec2ed55f5be723415ea73c4557c4).
* JavaScript guidance from [JSLint](http://jslint.com).
* Design guidance from Google's [Material Design](https://material.io/design) and [Adobe Color](https://color.adobe.com/trends).
* Fonts from [Google Fonts](https://fonts.google.com).
* Shields from [Shields](https://shields.io).