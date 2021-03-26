# WORK IN PROGRESS - chatfood

Project for the front end role at [https://chatfood.io](https://chatfood.io)

The app is hosted on netlify: [https://chatfood-test-front.netlify.app](https://chatfood-test-front.netlify.app)

<details>
 <summary>The test requirement can be seen here</summary>
 
# Restaurant menu
Our company needs to deplay the menu of one of our restaurants.

<img src="https://chatfood-cdn.s3.eu-central-1.amazonaws.com/fe-code-challenge-1/menu.png" style="width: 200px;" />

---

## Requirements:

Create a single page application to display the restaurant's menu with the following features

- The user should be able to filter the items by name;
- Clicking in the item line will add it to the basket and if it's already there, will increase the quantity by 1 until it reaches the stock availability;
- Should display the discounted price when available;
- The basket should be persisted in the browser's local storage;
- The back button in the very top, should reset the app state;

## You should:

- Write unit tests!
- Avoid using 3rd party libs to solve JavaScript logic.
- Choose a code writting style and stick with it (standardjs, airbnb...)
- Add information about your design decision.
- Write a production-ready code.
- Build it thinking this is part of a large application.
- Provide the source code with all the git history and the description of how to execute the code.
- Feel free to pick up the framework you are more comfortable with.
- TypeScript is a big plus

## Assets

The layout has to follow the provided mockup:<br>
https://www.figma.com/file/DpaOItWTwhkaeyOJrJAMyL/Coding-Challenge?node-id=1%3A86

Use the endpoint below to fetch the menu<br>
https://chatfood-cdn.s3.eu-central-1.amazonaws.com/fe-code-challenge-1/menu.json

**NOTE:** To avoid CORS use it under a localhost domain or feels free to host the `menu.json` somewhere else.

</details>

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Run your unit tests

```
yarn test:unit
```

> add a flag --watch to hotreload the tests

### Run your end-to-end tests

```
yarn test:e2e
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
