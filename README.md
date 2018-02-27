This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

A README.md file with:
 Link to your hosted app.
 Paragraph-long description (or elevator pitch) of your project.
 List of technologies used.
 List of installation and setup steps for the app itself and any dependencies - how would another developer run your site locally?
 Link to user stories
 Link to wireframes
 Link to entity relationship diagrams
 List of unsolved problems or future features.
 
#About
One of the issues with skiing is that you don’t know the snow conditions on any given trail at any given time until you actually ski down the run. What this means is that if a run is really iced up or has poor snow coverage, you won’t know until you are already on your way down the mountain, and at that point, it is too late to turn back. This app aims to solve that problem by providing an interface for users to give real-time updates of trail conditions. The app is tailored for mobile browsers with a simple UI and big buttons to hopefully prevent click errors when navigating with gloves on.

## Technologies Used:
  * Frontend - HTML/CSS/Javascript/Bootstrap/React
  * Backend - Ruby on Rails
  * Database - PostgresQL

 ##Access
 FE
 BE
 
## Dependencies
Information about dependencies can be found in package.json for the frontend and in the Gemfile for the backend
FE non-standard dependencies include:
    bootstrap
    jquery
    popper.js 
    react-burger-menu
    react-router-dom
    react-stars
    react-timestamp
 
 User stories
 
 ERD
 
 Wireframes
 
 Planned features



## Sending Feedback

We are always open to [your feedback](https://github.com/facebookincubator/create-react-app/issues).

## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.
