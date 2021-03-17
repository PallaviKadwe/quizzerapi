# Quizzer back end Application
The applciation is an express app set up on Heroku to provide data via API calls in the JSON format.

## Available Scripts
In the project directory, you can run:

### `npm start`
Runs the app in the development mode.
Open [http://localhost:3003](http://localhost:3003) to view it in the browser.

## Build deployed on Heroku
The application is deployed on heroku and accessed via the base url given below.
https://ppkflashcardapi.herokuapp.com/

The other GET routes are:
https://ppkflashcardapi.herokuapp.com/api/quizzer/geography
https://ppkflashcardapi.herokuapp.com/api/quizzer/history
https://ppkflashcardapi.herokuapp.com/api/quizzer/science

The POST route to add a flash card is
https://ppkflashcardapi.herokuapp.com/api/quizzer/flashcard


## Codebase is version controled on GitHub at 
https://github.com/PallaviKadwe/quizzerapi

## Database 
The database used is postgres 

## User Stories 
#### Backend tables
1. Create models for the flashcard table to contain the question, answer
2. Create models for the subject table to contain the subject title
3. Seed the tables 

#### Controller
1. As a end user I expect to be able to fetch data from the backend by subject
2. As a end user I expect to be able to save a flash card by subject



