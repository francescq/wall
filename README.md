# Wall

Wall application simulating an e-commerce app.
It uses React, Semantic ui for rendering

The application has been developed mobile first

It simulates a backend with a self-made api itemsApi with a local json file as a source

Features:
-Filter results by: name, price, title, description, caseInsentitive
-Paginated results
-See favourites at any time
-Filter favourites view
-Add remove favourites at any time

Wall uses CI/CD with CircleCI and Heroku

# Online demo

The distribution build is served through Heroku with a small [server.js](https://github.com/francescq/wall/blob/master/server.js)
[View demo on Heroku](https://wall2019.herokuapp.com/)

# Setup

Get it

```
git clone git@github.com:francescq/wall.git
cd wall
```

Install

```
npm install
```

Running the tests

```
npm run test
```

Running the app

```
npm start
```

# Tools

-   React / Redux / Thunk
-   Webpack
-   Jest + Babel + Enzyme + Sinon
-   Semantic-ui
-   React-paginate: [React-paginate](https://github.com/AdeleD/react-paginate/)
-   Scss
-   Dropdown: adapted this dropdown [Dropdown](https://codepen.io/_danko/pen/NRLdVo)
-   Husky, Eslint, Prettier

# Contribute

PRs not accepted.

# License

Do not use. This repo is going to disappear soon.
