# Nature Buddy App

#### Hi! My name's Phil and this github repo will be where I'll be storing my HTML, CSS and Javascript code for my Nature Buddy App!

## Github pages link to website click here -> [philkwek.github.io](https://philkwek.github.io/)

## What is Nature Buddy?

This app is for people who want to explore Singapore's Nature and has no idea where to start. 

The app will provide a suggestion by grabbing from a list of Parks, Nature Reserves and other Natural points of interests and then provide directions to said Location. App will then allow users to track their "Adventure" and once they are done, swiping up will allow users to see a trip summary displaying the total time taken and also their total distance travelled. 

Under the summary, users will also see a small tree which will grow for every time that they go on a adventure, providing users with a sense of progress/achievement. The app will also award badges for more significant achievements such as "Taken 3 Adventures!" or "Walked a total of 10km".

## Wireframes can be seen here -> [Click me!](https://xd.adobe.com/view/25f0d503-b976-4674-a2b6-ddfd50459d92-70a3/?fullscreen#access_token=eyJ4NXUiOiJpbXNfbmExLWtleS0xLmNlciIsImFsZyI6IlJTMjU2In0.eyJpZCI6IjE2MTAyNDQ5MDE5NThfNDEzY2IzYzQtMTUwYy00OTA2LTgyZWMtNWJjZjZjN2E4YjgxX3NncDUiLCJjbGllbnRfaWQiOiJDb21ldFdlYjEiLCJ1c2VyX2lkIjoiQjBDNDc3NTM1RTlBNjc4NDBBNDk1RTdEQEFkb2JlSUQiLCJ0eXBlIjoiYWNjZXNzX3Rva2VuIiwiYXMiOiJpbXMtbmExIiwiZmciOiJWREFJTkNFQlZMRzVaUFdHQzZBM1JIUUFZRT09PT09PSIsInNpZCI6IjE2MDk5MTE1MzY3NzdfODIwNzgxYjYtNTE5My00OWFjLTk1YzQtYzk0MzhmNDI1NmJjX3NncDUiLCJtb2kiOiJkMDliNDdmNiIsImV4cGlyZXNfaW4iOiI4NjQwMDAwMCIsInNjb3BlIjoiIiwiY3JlYXRlZF9hdCI6IjE2MTAyNDQ5MDE5NTgifQ.kkFYqW6msLxYyymuIOybP6z7ZMmSJtbAHkqGNY9iGMQPu6SqVh_0pF6nuayOa9qdg-fALIqnJRr4iqZRiSy6oWJyjkC9rmdamh-_AWz8siyyWdrASaswUan2qlsooE2XI8sDZmqy4IAZWW8B2v-_okCzqouv25d4aw1f1zwxtX_1lPttYAHScK0ShEIE9qsh_7FTdBVJZQQWvuPXs8uSo2-7lrAsUMZGALfxnPPoZoBzHizN232vl-pFXlz7Jns3JBWoLlSut5a1JjF9zfzBL7AjVLjjRKdTj6tLoPxbNm6RZ8uvAUy03V9uFpNJxj4hPvTeso2L9VKDm_K-NcAn7g&token_type=bearer&expires_in=86399987)

## Features

### Originally Planned Features
* Achievements (Get a Badge for X number of Adventures)
* Grow a Tree! (Tree grows for every Adventure taken)
* Track Adventure on the Map (API)
* Directions to Location
* Randomizer 
* Display said Location on Map (API)
* Display Trip Summary after ending Adventure (Time taken and Distance travelled)

### Extra Originally Planned Features 
* Show History of Adventures + Details
* Set up a simple Profile
* Give Directions/Routes to Said Location directly from the App

### Implemented Features
* Grow a Tree!
* Tracking Adventure on the Map (Track time spent and distance travelled)
* Live Location Tracking
* Directions to Location (via Google Maps app link)
* Location Randomizer
* Dark Mode Toggle
* History Page (displays visited location and stats)

### Future Planned Features
* Achievements (Badges etc)
* Build in Route finder to get to Location
* Ability to take photos of Location and share to a Database, pictures viewable by those who view the location
in the randomizer
* Create a Profile
* Levelling System 

## Technologies used
* Adobe XD
* Visual Studio Code
* HTML, CSS and Javascript
* Google Maps API, Routes API and Places API
* BootStrap 4
* Animate.css
* Darkmode.js
* GitHub & GitHub Pages


## Development Log

### 17/12/2020
- Designed Wireframe for Nature Buddy 
- Created Github repo

### 19/12/2020
- Started on Landing page text,design and animated elements
- Updated Readme to include wireframe

### 20/12/2020
- Started on basic HTML and JS for the random_location page
- added JSON list for all the possible nature adventure locations

### 21/12/2020
- Created JS functions to randomize locations and to store list of locations in localStorage
- Created JS function to check for localStorage location data, adds fresh list if data does not exist

- Coded JS Functions to random_locations.html to now show randomized locations
- Encountered Major Bug (access to AJAX request blocked by CORS policy), preventing access to proper names for locations and images

### 22/12/2020
- Connected landing page and random_location page via clickable arrow button
- Added Animations for random_location page on load
- Added a refresh for when User does not like suggestion
- Added Clickable button to confirm suggestion

- Note: "...blocked by CORS policy" issue/error still persistent, cannot display proper names and cannot get information from API about said location (Data needed for next few pages)

### 23/12/2020
- Fixed Major Bug, pages now properly display names of said locations to visit
- Added Confirmed Locations Page

### 24/12/2020
- Added Adventure Page
- Added a link to confirmed_location.html to open google maps to whatever confirmed location to help user with directions to said location

### 25/12/2020
- Added distance travelled indicator
- Added Countup timer to record time spent

- Organised Files into Folders
- Added Map Styling 

### 26/12/2020
- Added Trip Summary Page with data (distance travelled and time taken)

### 27/12/2020
- Added Live Location Marker to Journey.html so user can see real time location on the map to help them navigate.
- Added Map to Trip Summary and also added the base HTML and Javascript laywork for Tree Sapling growth Gamification

### 29/12/2020
- Finished Tree Gamification 
- Fixed issue with distance tracker not tracking distance properly

### 30/12/2020
- Redone Distance Tracking code

### 1/1/2021
- Added History HTML page to check previous adventures

### 2/1/2021
- Added Javascript to view History (note: as of now, it can only display up to 4 previous locations, will work on a page refresh code to allow to view more.)

### 3/1/2021
- Completed View History Page

### 6/1/2021
- Updated CSS of landing page and updated buttons for confirming location
- Added experimental code to test feasibility of a Dark Mode toggle for the app

### 7/1/2021
- Properly implemented a toggle Dark Mode on landing page
    - Fixed CSS colors for dark mode for visibility

### 9/1/2021
-   Cleaned up HTML code after running it through W3C checker

### 10/1/2021
- Updated Readme
- Updated CSS Elements of Journey.html and Index.html
- Updated positioning of Elements on Confirmed_location 
- Updated documentation for Javascript Code

## Credits

### Media
- All media used in this app was created by me

### Acknowledgements


### APIs and External JS Used
- Google Maps API
    - Maps API
    - Places API
- Animate.css (for animations)
- Darkmode.JS (for darkmode toggle)



