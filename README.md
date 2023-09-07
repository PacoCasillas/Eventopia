# Eventopia

Link to the deployed application on Heroku: https://vast-sands-19300-6673ec109b13.herokuapp.com/

## Introduction

This is a simple event management application built with Node.js, Express, and Sequelize that is deployed on Heroku. It allows users to create, edit, and delete events, as well as authenticate and sign up. Calendar option helps track your future events.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [Limitations](#limitations)
- [Licenses](#licenses)
- [Contributors](#contributors)

## Features

Event Creation: Allows users to create, edit, and delete events. Gives users options to favourite events.

Sign-up: Allows users to login and signup through authentication to be able to save their data.

Calender: Allows users to add their events to a calender. There also will be a option to see all events through the calender.

## Technologies Used

- express: Fast, unopinionated, minimalist web framework for Node.js
- bcryptjs: Library for hashing and comparing passwords
- express-session: Session middleware for Express.js
- dotenv: Loads environment variables from a `.env` file
- mysql: relational database management system based on structured query language (SQL)

## Usage

- Navigate to the [Eventopia](https://vast-sands-19300-6673ec109b13.herokuapp.com/).
- Click on the `Login` link in the navigation bar.
- If you have an account, enter your credentials and click on the `Login` button.
- If you don't have an account, click on the `Sign Up` link and enter your credentials to create an account.
- Once you are logged in, you will be redirected to the homepage where you can see all events.
- Click on the `Calendar` link in the navigation bar to see all events in a calendar view.
- If you want to create a new event, click on the dashboard link in the navigation bar and then click on the `Create Event` button. Enter the event details and click on the `Submit` button. Later, you can edit or delete the event from the dashboard.

Here are some images of the deployed application:

Here is the dashboard where you can create events:
![](public/images/dashboard.PNG)

This is how it looks when you click on Create event:
![](public/images/event.PNG)

![](public/images/calendar.PNG)
![](public/images/favourites.PNG)

## Limitations

1. Scalability: Handling a large number of concurrent users or events. As the user base or event count grows, the performance and responsiveness of the page could be affected.
2. Accessibility: Event page is accessible to users with disabilities. Meeting accessibility standards and providing alternative methods of interaction for individuals with different needs.
3. Purchasing: Adding a ticket purchasing option. Allowing users to create events that have ticket purchasing options when registrating for an event.
4. Third-party integrations: To deploy on Heroku, costs money to run the website. Adding in different dynos also require money. Rate limits, data access restrictions, or changes in API functionality can impact the event page.
5. Event management features: Implementing certain features; such as reminders, notifications, or advanced event customization options. Incentives and efficiency when creating and managing an event.
6. Security: Implementing security measures to protect user data, prevent unauthorized access, and mitigate potential vulnerabilities.

## Licenses

This project is licensed under the [MIT License](LICENSE).

## Contributors

- [Francisco Olivares](https://github.com/PacoCasillas)
- [Elisa Marchete](https://github.com/ElisaMarchete)
- [Andy Zhong](https://github.com/timebytes)
- [Kajian Pulenthirasingam](https://github.com/kajianpulenthirasingam)
