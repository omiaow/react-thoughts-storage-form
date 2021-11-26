<h1 align="center">
  Thoughts Storage
</h1>

<p align="center">
  <a href="https://github.com/omiaow/thoughts-storage-back-end/blob/main/LICENSE" target="blank">
    <img src="https://img.shields.io/github/license/omiaow/thoughts-storage-back-end?style=flat-square" alt="thoughts-storage" />
  </a>
</p>

#### Are you a developer and you want to make a form to your app? Don't waste your time to build back-end only for your form! Go to the [website](https://thoughts-storage.netlify.app/) and follow the steps:

- Create account or sign in.

- Generate new form using ☑️ **checkbox**, 🔘 **radio button**, 🖊️ **text**, 📝 **textarea**, 📅 **date**.

- Receive POST API request code.

- See your form responses and statistics 📊.

## 🚀 Demo

Try [Thoughts-Storage](https://thoughts-storage.netlify.app/) for free.

## Features

- 🕒 **Fast** - Generate any type of form for the short period.

- ✨ **Clear** - Track the form responses one by one or see statistics of them.

- 👀 **Multipurpose** - Get JSON and POST request of your form and connect it to the web, desktop, android or ios application.

## React npm package

#### Are you a React developer and you need a form to application? Install thoughts storage form npm package to display your form on your web page and track the responses on TS website.

- Create form on [Thoughts-Storage](https://thoughts-storage.netlify.app/).

- Receive JSON of your form.

- Install package: ```npm i thoughts-storage-form```.

- Add TSForm DOM on your react web page with ```form``` prop which is JSON of your form:
```
import React from "react";
import TSForm from "thoughts-storage-form";

function App() {

  // JSON of your form.
  let jsonForm = {
    "_id": "619e88ec1876b81ea13bfba6",
    "name": "Example",
    "listOfForms": [
      {
        "isImportant": false,
        "name": "text",
        "title": "White some words:",
        "text": ""
      }
    ]
  }

  return (
    <>
      {/* you can add another DOM or leave TSForm as one page */}
      <TSForm form={ jsonForm }/>
    </>
  );
}

export default App;
```

### Available prop(s)

- form (JSON type) - JSON of your form.

## Repositories

- **[Front-end](https://github.com/omiaow/thoughts-storage-front-end)** - Implemented on React.

- **[Back-end](https://github.com/omiaow/thoughts-storage-back-end)** - Express application on Node.js with MongoDB Atlas connection and with "bcrypt" and "jsonwebtoken" dependencies.

- **[npm form package](https://github.com/omiaow/react-thoughts-storage-form)** - React package with react-contenteditable dependency.

<hr>
<p align="center">
  Developing with ❤️ in Bishkek
</p>
