# Hivency Frontend Test

## Addendum

### Setup
Install dependencies : `yarn`
Start the json server : `yarn api`
Start the app : `yarn start`

### Young dev reacts to technical test

- It took about a work day worth of work split during all week. Spent quit some time on the UI to learn the frawework (more on that below).
- I don't often use Typescript + React so typing is messy and the overall app lacks validation and optimization.
- As the SportsDB api didn't let me fetch players by team id without paying, I did my own little json server embedded in the app and decided to have a little fun with the data. The theme is still connected to sports, in a way.
- As I wanted to build a quick and not ugly UI, I discovered [TailwindCSS](https://tailwindcss.com/) during this test. Lots of fun, very customizable and very powerful.
- I used Redux for store management. First time using it with Typescript so it is certainly optimizable.
- I tried to test the app using react-testing-library + typescript. Spoiler: It didn't go as planned so I dropped the idea in order to not spend an eternity on this.

## Briefing

Welcome to the Hivency Frontend test!

This test is designed to evaluate your web development skills, and is in two parts:

- first part: a coding exercise to do at home
- second part: a 1h live coding session, where you will add more features to your exercise

## Part 1: Home coding exercise

### Mission

You just joined a small sport organization as a web developer.

This is your first day, and it appears that you are alone in the IT office,
when suddenly someone knocks on the door.

The team manager enters and asks you if you can develop a responsive web application to:

- View a list of teams
- View a team (ie. list of players)
- View a player
- Create or edit a player
- Add or remove a player in a team
  
### Details

The manager says you have complete creative freedom to:

- decide what information to display: photos, names, dates, description, matches..
- decide how to display things: list, table, grid, cards, thumbnails, colors, animations..
- decide what tools and libraries to use, change the configuration

He says that to get data, you can use [The SportsDB API](https://www.thesportsdb.com/api.php), which is a sports data API (free for basic use). You can also use another API or build your own data if you prefer.

He already initialized a TypeScript + React project using Create React App. You can refer to [this guide](https://facebook.github.io/create-react-app/docs/getting-started) if you want to know the commands to run the server.

### Requirements

The manager asks you to:

- Keep *TypeScript* and *React* because it sounds cool
- Do not hesitate to add comments and explanations if necessary
- Put the code on a Git repository (Github, Bitbucket etc) or a zip file
- Send the link or the zip to the Hivency tech team for review!

## Part 2: Live coding exercise

During the live coding session your mission will be to implement some features, based on the state of your project at the time.

you will be asked to participate in a video meeting and share your screen and editor.
(note: you will be allowed to go on Google, MDN.. if you are blocked).

To ensure the best experience possible, we will ask you to share a read-only access to your
test project using [Liveshare](https://code.visualstudio.com/learn/collaboration/live-share), so that we can look at the code without any video compression artifacts. You will thus need to have the [VSCode editor](https://code.visualstudio.com/download) installed.

