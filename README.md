# 🐝 Sapper Template w/ Tailwind 2.0, TypeScript, ESLint, and Prettier 🍯

All the [Sapper](https://github.com/sveltejs/sapper) x [Tailwind 2.0](https://tailwindcss.com) starter templates I came across were outdated using either Tailwind v1 or an old version of Sapper.

So I made one for getting started featuring all the nuts and bolts of a more advanced config to help ya hit the ground running quicker.

Very open to community PRs to keep this thing up to date and eliminate the headaches others will go through when things inevitably get updated in the future.

## Usage 🧙‍♂️

### With degit

```bash
npx degit "tonyketcham/sapper-tailwind2-template" my-winded-app
```

### With GitHub Templates

Click on "Use this template" to create a new project repository initialized by the template.

### Running the project

Once you have created the project, install dependencies and run the project in development mode:

```bash
cd my-app
yarn install
yarn dev
```

This will start the development server on [localhost:3000](localhost:3000). Open it and click around.

You now have a fully functional Sapper project! To get started developing, consult sapper.svelte.dev.

### Previewing Static Site Generation

```bash
yarn static
```

This will export your site into static files and open a local production server on [localhost:5000](localhost:5000). Open it and make sure everything matches your dev server.

## 👺 The Catch

_ref: [@breadthe/svelte-tailwind2-starter](https://github.com/breadthe/svelte-tailwind2-starter)_

When PostCSS kicks in on `production` mode, it doesn't consider the dynamic class bindings in your components. Thus, if you use `bg-gray-200` only once in your app like this: 
```svelte
<h1 class="relative flex m-6 text-5xl" class:bg-gray-200={isGray}>
```
then you're losing that `bg-gray-200` by default.

*However*, there's a slightly inconvenient way around that which will keep ya happy as long as you remember to do it.

```js
// tailwind.config.js
  purge: {
    enabled: production,
    content: ['./src/**/*.svelte', './src/**/*.html'],
    options: {
      keyframes: true,
      safelist: ['bg-gray-200'], // throw any classes that are *only* used in class bindings here. If you're using that class in a regular class attribute, then you should be good and don't have to worry about putting it here
    },
  },
```

If anyone has a nice fix to this so that PostCSS considers dynamic classes in its purging, please get a PR on the horn 🕵️‍♀️
