# Work Day Scheduler

## Your Task

Simple calendar application that allows a user to save events for each hour of the day. This app runs in the browser and feature dynamically updated HTML and CSS powered by jQuery.

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
//USE DAY.JS TO IMPLEMENT THIS, LOOK AT ACTIVITY 25 & 26
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
//USE BOOTSTRAP CODE THAT WAS CREATED FOR STARTER CODE BLOCKS TO CREATE UP UNTIL 5PM
WHEN I view the time blocks for that day
THEN each time block is color coded to indicate whether it is in the past, present, or future
// CREATE A FORMULA THAT GOES HAND IN HAND WITH THE TIME OF THE DAY TO DETERMINE IF CODE BLOCK SHOULD BE GREY(PAST),RED(PRESENT),GREEN(FUTURE)
WHEN I click into a time block
THEN I can enter an event
//ABLE TO CLICK INTO EVENT AND TYPE
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
//CREATE A FUNCTION THAT STORES INPUT TEXT INTO LOCAL STORAGE
WHEN I refresh the page
THEN the saved events persist
```

The following animation demonstrates the application functionality:

<!-- @TODO: create ticket to review/update image) -->

![A user clicks on slots on the color-coded calendar and edits the events.](./Assets/05-third-party-apis-homework-demo.gif)

## Grading Requirements

> **Note**: If a Challenge assignment submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:
>
> - A repository that has no code
>
> - A repository that includes a unique name but nothing else
>
> - A repository that includes only a README file but nothing else
>
> - A repository that only includes starter code

This Challenge is graded based on the following criteria:

### Technical Acceptance Criteria: 40%

- Satisfies all of the above acceptance criteria plus the following:

  - Uses a date utility library to work with date and time

### Deployment: 32%

- Application deployed at live URL

- Application loads with no errors

- Application GitHub URL submitted

- GitHub repo contains application code

### Application Quality: 15%

- Application user experience is intuitive and easy to navigate

- Application user interface style is clean and polished

- Application resembles the mock-up functionality provided in the Challenge instructions

### Repository Quality: 13%

- Repository has a unique name

- Repository follows best practices for file structure and naming conventions

- Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

- Repository contains multiple descriptive commit messages

- Repository contains quality README file with description, screenshot, and link to deployed application

## Review

You are required to submit the following for review:

- The URL of the deployed application

- The URL of the GitHub repository, with a unique name and a README describing the project

---

© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
