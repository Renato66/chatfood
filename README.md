# Chatfood - [Open](https://chatfood-test-front.netlify.app)

[![Build test](https://github.com/Renato66/chatfood/actions/workflows/build-test.yml/badge.svg)](https://github.com/Renato66/chatfood/actions/workflows/build-test.yml)  [![E2E test](https://github.com/Renato66/chatfood/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/Renato66/chatfood/actions/workflows/e2e-test.yml)   [![Unit test](https://github.com/Renato66/chatfood/actions/workflows/unit-test.yml/badge.svg)](https://github.com/Renato66/chatfood/actions/workflows/unit-test.yml)

Project for the front end role at [https://chatfood.io](https://chatfood.io)
#### for the javascript:
[vue.js v2](https://vuejs.org/v2/guide/) as my main stack and some extra packages: [typescript](https://www.typescriptlang.org), [axios](https://github.com/axios/axios), [vue-i18n](https://kazupon.github.io/vue-i18n/),[vue-router](https://router.vuejs.org), [vuex](https://vuex.vuejs.org), [vue-toast-notification](https://github.com/ankurk91/vue-toast-notification)

#### for the hosting:
The app is hosted on netlify: [https://chatfood-test-front.netlify.app](https://chatfood-test-front.netlify.app)
#### for the css:
[SASS](https://sass-lang.com/documentation/syntax) with Prefixed BEm
```
prefix "cf-"
Block "menu"
Element "title"
modifier "highligth"
`<header class="cf-menu"><h1 class="cf-menu__title --highligth">My title</h1></header>`
```

#### for error tracking:
[sentry](https://sentry.io)
#### for testing e2e:
[cypress](https://cypress.io) and its plataform to register the tests - [check it out](dashboard.cypress.io/projects/fg718b/runs)
#### for testing unit:
[jest](https://jest.io) and [codecov](https://about.codecov.io) plataform to register the tests - [check it out](https://app.codecov.io/gh/Renato66/chatfood)
#### for CI:
[github actions](https://github.com/Renato66/chatfood/actions)

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
