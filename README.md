# HR Application

## Here we practice React

### Core features

This app helps you to manage all employees - it displays an employees list with their core properties  
and you can promote and take promotion away again.
You can monitor the status of the employees (anniversaries or when to check the probation)
You can change the properties in each employee Card with an edit and save button, you can also change to a more detailed view when pressing the show details button on each card, showing all the data.
You can also add a new employee to the db.json via a detailed form, which handles all the data fields.

To handle the adding in the form and changes in the emlpozee cards there is an axios hook to do the patch, fetching and posting.
A custom hook useEmployeeStatus handles the data that shows the status of the emplozee, eg. "years worked here".

### User guide

- open the folder in vs code
- open the terminal in vs code with command + J
- start the mock backend with the command: `npm run server`
- start the local server with the command: `npm run dev`
- copy the address of the local host to your browser `http://localhost:5173/`
- now you can see the website
- to terminate the server press ctrl + c in the vs code terminal
- log in with username: steffi and password: test

### Reflection

I practiced to set up the React environment, to write code in jsx and work with the file system. I also learned how easy you can forget to import or export the files. I learned how to use useState and how to handle events in jsx. I learned how to set up the usual html page layout with header, footer and main.
I learned to use:

- conditional rendering,
- routing with react-router-dom,
- how to create a form
- how to use State management
- log in functionality
- API integration
- how to use a json server and fetch and display data (Get, Post, Patch)
- how to use custom Hooks (useAxios and useEmployeeStatus)
- how to organize the files in an uderstandable way

### Acknoledgements

Parts of the code and part of the styling is written by Margit Tennosaar and customized by Steffi Jana.

### Deploying the website

For Deploying the site I used netlify and to host the server I used render. You can visit the page on:
https://sjana-hr.netlify.app/
