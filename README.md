# Installation Section
**You can use Yarn or NPM**
#### Install the dependencies
```bash
yarn install
```
or if you use NPM:
```bash
npm install
```
#### Run the app locally
```bash
yarn dev
```
or
```bash
npm run dev
```

When the app is ready, open your browser and hit **localhost:3000**

#### Deployment
To deploy this app, you need to build the project first with this command
```bash
yarn build
```
or
```bash
npm run build
```

Then look at the repo folder's root, there'll be a folder named **dist**, that is the forder you should ship to your server machine/host.

# Tech Stack Section
1. Vue.js
   There are some reasons why I choose Vue.js rather than other frameworks:
   - It's the most familiar framework for me and becomes my daily basis tool
   - Quite simple and straight forward
2. Tailwind CSS
   Helps me to style the components with ease.
3. Vite
   An alternative to webpack, it's so popular nowadays and worth to try.

# SEO strategy
I use standard SEO configuration through modifying meta tag, using semantic tag and improving its performance as much as possible.

# Misc
- Filtering and sorting of the app in this repo is achieved by client-side because there's no detail for doing the jobs in the API documentation.
- Toggling the **Wish Button** has no interaction effect from the API but from the component's state beacause of the API's issue.
- Pages are fully responsive (for mobile, tablet and desktop mode)
- This repo is also served in a demo site at [https://uhk-exp-product-list.netlify.app/](https://uhk-exp-product-list.netlify.app/) 