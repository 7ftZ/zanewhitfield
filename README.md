# zanewhitfield.com

This is my personal site.

## Codebase

This site uses the following:

- [Github](https://github.com/) (hosting codebase)
- [Cloudinary](https://cloudinary.com/) (hosting videos & pictures)
- [SVGJAR](https://svgjar.web.app/) (to load pictures)
- [Netlify](https://www.netlify.com/) (to deploy app)
- [EmailJs](https://www.emailjs.com/) (to send emails)
- [Calendly](https://calendly.com/) (to schedule meetings & collaborations)
- [Google Analytics](analytics.google.com) (to provide data analytics for the site)

## Prerequisites

You will need the following things properly installed on your computer.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (with npm)
- [Ember CLI](https://ember-cli.com/)
- [Google Chrome](https://google.com/chrome/)

## Installation

- `git clone <repository-url>` this repository
- `cd zanewhitfield`
- `npm install`

## Running / Development

- `ember serve`
- Visit your app at [http://localhost:4200](http://localhost:4200).
- Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Running Tests

- `ember test`
- `ember test --server`

### Linting

- `npm run lint:hbs`
- `npm run lint:js`
- `npm run lint:js -- --fix`

### Building

- `ember build` (development)
- `ember build --environment production` (production)

### Deploying

This site is hosted and deployed on Heroku! Dog fooding! Gotta love it!

### Deployment Process

Netlify app is called `zanewhitfield-production`

1. Create new branch off of master
2. Make changes locally
3. Make PR
4. Check changes in Netlify review app
5. Merge to master (Automatically deploys to staging)
6. Check changes in staging
7. Promote to production

### Site status

[![Netlify Status](https://api.netlify.com/api/v1/badges/bbcaa80b-da0e-4988-9432-6d0222a73127/deploy-status)](https://app.netlify.com/sites/zanewhitfield-production/deploys)

### Site Roadmap

- [x] Add anchor to the top of each page to make sure user sees full pages during navigation
- [x] Hook up form submission api and function to message user and me
- [x] Add picture of me to the homepage
- [ ] Add hobbies navigation in addition to Timeline navigation
- [x] Add actual content to site
- [x] Add form validation
- [x] Create environment variables
- [ ] Add gradient to site background (from apple black to lighter grey)
- [x] Update page title on tabs
