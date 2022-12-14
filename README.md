# MITxPRO-BadBankMERN

A 4th refactoring of the Bad Bank App, moving it to the 3-Tier MERN Architecture.


## Description

This will be used for my MIT xPRO Portfolio.
This Bad Bank project is a refactored version of the Bad Bank 'Fire Hydrant' project I did
in the previous MIT 'Digital Transformation' course in December 2021.
It was bascially rewritten from scratch in React Components, Context, and State.
A 3rd refactoring took all possible Components and commonized and simplified them.

This refactoring moved the entire App to the MERN Architecture...

STEP 1: Move files into 'public' folder for serving as static files.</br>
STEP 2: Create new NodeJS App to handle the Server Side in the root folder.</br>
STEP 3: Serve all the static files with ExpressJS.</br>
STEP 4: Create Routes in ExpressJS for all React Components.</br>
STEP 5: Update UI to use new functionality from the Server.</br>
STEP 6: Add a Data Store (MongoDB) to the Backend.</br>
STEP 7: Test entire App with HTTP-SERVER and DOCKER Image.</br>
STEP 8: Host the SITE / APP and make public.</br>


## Getting Started


### Dependencies

* REACT
* BABEL


### Installing

* Clone this repo

* Use "npm install" to load a simple HTTP Server for the project
```
npm install
```

* Use "npm start" command in the project folder to start the React App development environment
```
npm start
```

* Navigate your Browser to...
```
localhost:3000
```

* Demonstration of app startup...

<p align="left"><img src=".\public\images\app-startup.png" width="720" title="Server Startup..."></p>

* Example of app u.i...

<p align="left"><img src=".\public\images\app-ui.png" width="720" title="App U.I..."></p>

* Demonstration of the React Bad Bank... (https://youtu.be/hctvo-EFqe4.mp4)

<video id="demo-video" style="border-style:solid; border-width:2px" src="https://youtu.be/hctvo-EFqe4.mp4" width="1024" allowfullscreen="allowfullscreen" webkitallowfullscreen="webkitallowfullscreen" mozallowfullscreen="mozallowfullscreen" allow="autoplay *" loop autoplay autobuffer controls muted>
Your browser does not support the HTML5 player.
</video>


## Help

This is an unsupported demonstation project.

## Terminology

| Word or Acronym	| Description/Definition                                |
|-------------------|-------------------------------------------------------|
|  NPM	            | Node Package Manager, actually ???Node PM???, ???Node pkgmakeinst??? a system to deploy, install, and maintain NodeJS Apps. (PM was a BASH utility).
|  Template	        | A file used to start others to ensure code and documentation consistency.
|  React            | A Web UI development system, a JavaScript library developed by Facebook and made public???and Open Source???since 2013.
|  Babel            | A JavaScript ???transpiler??? that compiles JavaScript containing newly released syntax into code that is backward compatible with currently available Browsers.


## Authors

Contributors names and contact info

* Dr. Abel Sanchez (MIT) [@Unknown](https://twitter.com/Unknown)

* Timothy J McGuire [@TimothyMcGuire](https://twitter.com/TimothyMcGuire)


## Version History

* 0.4
    * Refactored into the MongoDB, Express, React, NodeJS (MERN) Architecture.
* 0.3
    * Refactored further by simplifying the Form Component for all functions.
* 0.2
    * Refactored further into a 'create-react-app' framework with Context.
* 0.1
    * Refactored into the MicroCODE [MCODE] style and templates.
    * See [commit change]() or See [release history]()
* 0.0
    * Coded using MicroCODE Templates, following along with Dr. Sanchez' videos.

## Future Development

* 0.5
    * Correct NavBar nor re-rendering on Context changes.


## License

This project is licensed under the MIT License - see the LICENSE.md file for details
