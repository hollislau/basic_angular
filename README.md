# Basic Angular App
This is a simple Angular app that allows a user to modify or delete a default greeting displayed on the homepage.

To use this app, clone this repo to your local machine. Run `npm install`, then run `gulp` to automagically compile the necessary files, run the client-side test(s), and start the client server. The first time `gulp` is run after newly installing the app, it may appear to hang for 5 to 10 seconds while it is downloading and installing Selenium updates for Protractor. Alternatively, you may skip tests and linting by manually running the client server with `npm start`.

In your browser, navigate to <http://localhost:5000> to play with the greeting. Modify the greeting by entering your own text in the provided input field, or remove it entirely by pressing the "Delete" button. Enjoy!
