[![MIT License on GitHub](https://img.shields.io/github/license/seankelliher/electoral-college-list?style=flat-square)](/LICENSE.txt)
## Electoral College List

Interactive component to calculate Electoral College votes. 

## Project Screen Shots

![screen shot of project](/screenshots/electoral-college-list-screenshot1.jpg)

![screen shot of project](/screenshots/electoral-college-list-screenshot2.jpg)

![screen shot of project](/screenshots/electoral-college-list-screenshot3.jpg)

## Installation and Setup Instructions

This is a static component. All you need is a web browser.

## Reflection

For those outside the US, the Electoral College is a voting system to elect the President. Each state is assigned a certain number of Electoral College votes. If a majority of people in a state vote for a candidate, that candidate gets all of the states' Electoral College votes. A candidate who wins enough states to total 270 Electoral College votes wins the election.

I wanted to create a component that lets users test a candidate's potential paths to victory. Users can add or subtract states from a list while the component automatically calculates the Electoral College vote tally and signals (via color coding) when the 270 vote threshold is met. A challenge in creating this was allowing users to scroll through a lengthy list of 50 states while always keeping the tally visible and out of the way - especially important on small screens. I accomplished this using flexbox. The header and tally within it remain stationary while the list is scrollable.

## Acknowledgments

* Electoral College count from the [National Archives](https://www.archives.gov/federal-register/electoral-college/allocation.html).
* 2016 Presidental Election results from [The New York Times](https://www.nytimes.com/elections/2016/results/president).
* Readme guidance from [Brenna Martenson](https://gist.github.com/martensonbj/6bf2ec2ed55f5be723415ea73c4557c4).
* Design guidance from Google's [Material Design](https://material.io/design) and [Adobe Color](https://color.adobe.com/trends).
* Fonts from [Google Fonts](https://fonts.google.com).
* Shields from [Shields](https://shields.io).