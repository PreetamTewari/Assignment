# Infeedo Assignment

## Task
You are tasked with building a system to keep track of your tasks. You will need to write CRUD APIs for managing tasks and API to get the metrics for your tasks. You should use Node.js for the backend, any SQL database for managing database interactions.
API to create a task.
API to update a task
API to get all tasks, make API paginated.
API to get task metrics like counts tasks on basis of status and timeline Example:
```
{
"open_tasks": 10,
"inprogress_tasks": 30,
"completed_tasks": 50
}
```
```
[{
"date": "July 2023",
"metrics": {
"open_tasks": 0,
"inprogress_tasks": 0,
"completed_tasks": 30
}},
{
"date": "August 2023",
"metrics": {
"open_tasks": 10,
"inprogress_tasks": 30,
"completed_tasks": 50
}}]
```
## Goal

Verify applicant's ability to create Node APIs and use Database
Verify that applicant is able to write clean and testable code.
Check for best practices inside chosen backend framework.

## Requirements

For implementation use NodeJS

## Software and Assumptions
I have created the application using node version 20.2.0 on a windows 11 machine.
I have assumed that the task_state to have 3 values,
* 0 for open_tasks
* 1 for inprogress_tasks
* 2 for completed_tasks
The mysql server is being used from the hobby tier from Planetscale(https://planetscale.com/).

## Setup

Please unzip the assignment.zip folder and run the following commands.
```
npm install
```
This will help in downloading all the resources needed to run the application.
Express, Mysql2 and Nodemon will be installed.
Once the above step is complete, please run the command,
```
npm start
```
This will bring up an instance of the express application running on port 8800(can be changed from the .env file).

## Usage
These are the following APIs being served in this application.

1. getAll api with pagination. This is a GET request. The default results per page is set at 5 which can be changed from /config/general.config.js file.

Example:
```
Request URL: localhost:8800/tasks?page=1
Response: {
  "data": [
    {
      "id": 1,
      "task_state": 2,
      "date": "2023-05-31T18:30:00.000Z"
    },
    {
      "id": 2,
      "task_state": 2,
      "date": "2023-06-01T18:30:00.000Z"
    },
    {
      "id": 3,
      "task_state": 2,
      "date": "2023-06-02T18:30:00.000Z"
    },
    {
      "id": 4,
      "task_state": 2,
      "date": "2023-06-04T18:30:00.000Z"
    },
    {
      "id": 5,
      "task_state": 2,
      "date": "2023-06-06T18:30:00.000Z"
    }
  ],
  "meta": {
    "page": "1"
  }
}
```
2. create API to add new tasks to the database. This is a POST request which sends in a request body that is then read and pushed to the database.
```
Request URL: localhost:8800/tasks
Request Body:  {
  "task_state": 0,
  "date": "2023-08-15"
}
Response:
{
  "message": "Task added successfully"
}
```
3. update API to update the task_state with the given id. This is a PUT request which sends the id as a request param and task_state as the request body.
```
Request URL: localhost:8800/tasks/10
Request Body: {
  "task_state": 2
}
Response: 
{
  "message": "Task updated successfully"
}
```
4. getMetrics API to get the total open, in-progress and completed tasks for a given month and a year.

```
Request URL: localhost:8800/tasks/metrics
Request Body: {
  "month": "August",
  "year": 2023
}
Response: 
{
  "date": "August 2023",
  "metrics": [
    {
      "open_tasks": "13",
      "inprogress_tasks": "0",
      "closed_tasks": "0"
    }
  ]
}
```

# Thanks for the opportunity
