# ANGULAR

## Start the project

### Install `NG` CLI 

```sh
npm install -g @angular/cli
```

### CREATE A NEW PROJECT

Note:
`my-app` is the name of a new app

```sh
ng new my-app
```

### RUN APP

Enter inside the new app directory and run:

_Just run serve_

```sh
ng serve 
```

_Run and open the serve_

```sh
ng serve [--open]
# or
ng serve [-o]
```

### ANGULAR MATERIAL _(optional)_

Components of [here](https://material.angular.io/) 

```sh
ng add @angular/material
```

### Tailwind _(optional)_

 - Install

```sh
# installtailwind and dependenceies
npm install -D tailwindcss postcss autoprefixer
# init tailwind
npx tailwindcss init
```

- Initial configuration template phat

Inside `tailwind.config.js`

```javascript
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // NEW
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```


 - Add the Tailwind directives to your CSS

 Inside `styles.css`

 ```css
@tailwind base;
@tailwind components;
@tailwind utilities;
 ```

## Components

Create a component

```sh
ng generate component <name_of_component>
```
