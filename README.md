# timetrekr-client

Timetrekr App React Client

# Set up Timetrekr

timetrekr.com

Create github repo
Clone repo
Go into directory

npx create-react-app . —template typescript

VS Code plugins:
Prettier - Code Formatter
ESLint (Dirk Baeumer)
Bracket Pair Colorizer
CSS Modules (clinyong)
IntelliSense for CSS class names
Auto Rename Tag

Packages:
react-router-dom
@types/react-router-dom
node-sass
luxon
@types/luxon
react-icons
nanoid

.env
FAST_REFRESH=false

Add to
tsconfig.json
"baseUrl": "src",

remove eslingconfig from package.json

npm i eslint —save-dev

npx eslint —init

npm i --save-dev eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-cypress

npx eslint src —fix

npm i --save-dev cypress @testing-library/cypress

npx cypress open

Atomic Design
https://bradfrost.com/blog/post/atomic-web-design/
https://atomicdesign.bradfrost.com/chapter-2/
https://bradfrost.com/blog/link/thinking-about-react-atomically/
https://medium.com/@wheeler.katia/thinking-about-react-atomically-608c865d2262
https://danilowoz.com/blog/atomic-design-with-react

BEM
https://medium.com/@jescalan/bem-is-terrible-f421495d093a
https://hackernoon.com/bem-should-not-exist-6414005765d6

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
