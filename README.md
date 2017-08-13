# Code42 Directory 

A single page web application designed to show the members of the Code42 GitHub organization and
provide details about its members.

## Getting Started

These instructions will get the project up and running on your local machine for development and testing purposes.

### Prerequisites

* [NodeJS](https://nodejs.org) - The server runtime
* [Yarn](https://yarnpkg.com) - The package manager

### Installing

Install necessary dependences

```
yarn install
```

Run the server

```
yarn start
```

Navigate to http://localhost:3000 to view the application.

## Running the tests

```
yarn test
```

## Built With

* [NodeJS](https://nodejs.org) - The server runtime
* [Yarn](https://yarnpkg.com) - The package manager
* [ReactJS](https://facebook.github.io/react/) - The web framework used
* [Redux](http://redux.js.org/) - State management library

## Authors

* **Scott Abraham** - *Initial Implementation* - [scabraha](https://github.com/scabraha)

## Known Issues and V2 Features

The following is a list of known issues and/or V2 proposed features:

* **Mobile Support** Implement CSS media queries to create a collapsable navigation drawer.
* **IE Support** Internet Explorer currently has trouble retrieving json data types through ajax
  calls and blocks the request. Switched from jQuery.getJSON to jQuery.ajax to alleviate issue and
  problem persists.
* **Back Button Support** Allow users to use the browser's native back button.
