# worksavvy-fullstack-takehome

My project is created in React.js
All with the latest versions of the libraries.
## Installation
Briefly talking about the dependencies, I used 

Simple bootstrap functionality
```
Npm install  --save bootstrap
```
I used a json server for this takehome project. Obviously with more time I could migrate this to a SQL database
```
Start server:
npx json-server --watch data/users.json --port 8000
```
This is React JS router libraries for the navbar
```
npm install react-router-dom
```
In this project I used the moment library to handle all the data time conversions and dates
```
npm install moment
```

##Thing to improve in the future.

My first improvement would be migrating the application to a full SQL database as json is very good at managing test data it is not very practical when scaling up the project.

The Timetable generation was rushed and lacks the persistent data I would love it to hold.
in its current state the timetable has all the logic to generate 2 weeks’ timetable for any user. However, I will have to save the data to each user which I have not done yet due to time constraints.

this would be achieved by placing saving the dates that the user would work. Additionally, a start and end date for the two weeks. As soon as the end date would elapse the application can render the next two weeks +with two new workdays

