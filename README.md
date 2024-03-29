# Mockup-test

This is a mockup of a real estate website, built using Ember.js.

This is a *Single Page Application*, meaning there's no refresh when changing pages. Javascript needs to be enabled for this app to run. One of the main advantages of using SPA is the user experience on mobile, giving a closer feel of a real native app. Using webviews, or some tools like PhoneGap, it's possible to publish it as an app, of course it wouldn't perform as fast as a native one, but it's something to start until a native app is up and running :)

**Some cool stuff about this app:**
- Fully responsive
- CSS-only slideshow, no Javascript necessary for this baby to run :)
- Off-canvas menu to display sidebar when screen size is too small
- It's possible to favorite a property, however there's no persistence of data

**Remember, this is not a real app, it's just a mockup done in a couple of days, so it's highly likely to have bugs, if you find any, please let me know.**

**TODOS:**
- Test for accessibility issues on screen readers
- ~~*Share on Facebook* functionality~~
- ~~Transfer images used on the slideshow from the template to the model, and loop through it on the template~~
- Add some comments documenting the code
- Add modal with "sorry this is under development" or something to open when clicking on links or buttons that don't perform any action
- Open off-canvas sidebar always showing top
- ~~Check for possible issues with logo and menu height~~
- Improve SASS, make things more modular (especially the accordion)
- ~~Add *noscript* tag saying this application requires Javascript~~
- Maybe play with sending real emails on *Contact By Email* and *Email To a Friend*
- Maybe generate real PDF with main content on *Print Details in PDF*
- Browser Test

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM) and [Bower](http://bower.io/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

**If you don't already have ember-cli installed globally in your system, you need to do so, just run `npm install ember-cli -g`**

## Running / Development

* `ember server`
* Visit your app at http://localhost:4200.

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

This app is currently being deployed to Heroku, more instructions [here](http://www.ember-cli.com/#deployments)

## Further Reading / Useful Links

* ember: http://emberjs.com/
* ember-cli: http://www.ember-cli.com/
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

