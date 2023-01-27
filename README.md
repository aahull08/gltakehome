# Find The Reposatories!

###Decisions:

- Material UI

  - Made designing the ui much easier and has table avaliable for use.
  - Tables in Material UI has the ability to expand to allow sorting the repos by different catagories if that is wanted in the future.
  - Also, these table could in the future be paginated so you do not have to request all the repos in one request, but can only request and recieve 5 or 10 at a time to speed up the HTTP request-response cycle.

- Model

  - I chose to use a model to display the commit history to make it feel more natural than having to build a new page for the commits and navigating between pages.

- Test

  - I did some very simple unit test for a few components, if I had more time, I would add more unit testing for sure.

- Express App

  - I created an express app that would serve the react app from the build file.

- Hosting
  - The application is hosted on a Digital Ocean droplet.
  - I used nginx as a reverse proxy to pass the initial get request to the express server that then serves the react application.
