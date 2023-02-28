# boilerplate-react-ts

## Prerequisite
Be sure you have yarn installed on your computer with the following command. If Yarn isn't installed, follow this [tutorial](https://classic.yarnpkg.com/en/docs/install):
```console
yarn --version
```

## Installation
From the root of the repository install the node_modules by running:
```console
yarn
```

## Development
To launch the server in development mode:
```console
yarn run start
```

## Production
1. Build an app bundle into the `dist` folder with:
```console
yarn run build
```

2. Expose the client on [localhost](localhost:6688):
```console
yarn run deploy
```

## Tests

### Storybook
Check the graphical rendering of the components with Storybook:
```console
yarn run storybook
```

### Jest
Run the unit testing with Jest:
```console
yarn run test
```
