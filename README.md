# 🐝 Sapper Template w/ Tailwind 2.0, TypeScript, ESLint, and Prettier 🍯

[![sapper-tailwind2-template build status](https://circleci.com/gh/tonyketcham/sapper-tailwind2-template/tree/master.svg?style=svg)](https://app.circleci.com/pipelines/github/tonyketcham/sapper-tailwind2-template)

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
cd my-winded-app
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

## 📝 Notes
You will encounter this when you run `yarn dev`:

```sh
• service worker
No directory provided. Skipping CSS generation
```
[This is a Sapper service worker issue](https://github.com/sveltejs/sapper-template/issues/298) and can be safely ignored until they address this with a fix.

## Contributions

I'm very open to issues & PRs to keep this template updated, improved, and living on as a source of maintained truth. Don't shy away from posting in the issues or discussions tab with any questions or problems you're facing, or your thoughts on how to improve this template.
