# KANBAN BOARD ![Static Badge](https://img.shields.io/badge/license-MIT-blue)

## Description

The Kanban Board Application is designed for agile teams to securely manage and track work tasks. This application includes a secure login mechanism to protect user data and ensure authorized access to the Kanban board. Utilizing JSON Web Tokens (JWT) for authentication, the app offers a seamless and secure user experience.

## Features

- Secure Authentication: User authentication is powered by JWTs stored in local storage.

- Kanban Board Management: Add, edit, and move tasks across columns (e.g., To Do, In Progress, Done).

- Session Timeout Handling: Automatic session invalidation upon inactivity.

- Error Handling: User-friendly error messages for invalid login attempts.

- Responsive Design: Accessible on various devices, including mobile, tablet, and desktop.

## Installation 

To run this project in your local evironment, follow these steps:

1. Clone the Repository:

```bash
   git clone git@github.com:williamscodigo/kanban-board.git

```

2. Navigate to the Project Directory:

```bash
    cd kanban-board
```

3. Make sure you modify .env file (create file inside server folder, if it doesn't exist):

```
    DB_NAME='dbname'
    DB_USER='dbuser'
    DB_PASSWORD='dbpassword'
    JWT_SECRET_KEY='secretkey'
```

4. Install Dependencies:

```bash
    npm install
```

5. Build the application:

```bash
    npm run build
```

6. Seed the database:

```bash
    npm run seed
```

7. Start the app:

```bash
    npm run start:dev
```

## Usage

Live On Render: [https://kanban-board-es8u.onrender.com/](https://kanban-board-es8u.onrender.com/)

> **[!IMPORTANT]**
> Since this application is currently not implementing a signup functionality, you will have to use one of the following already created user credentials to sign in.
- username: 'JollyGuru', password: 'password'
- username: 'SunnyScribe', password: 'password'
- username: 'RadiantComet', password: 'password' 

## Technologies Used

- Frontend: React, TypeScript

- Backend: Node.js, Express

- Authentication: JSON Web Tokens (JWT)

- Database: PostgreSQL


## License
[https://opensource.org/license/mit](https://opensource.org/license/mit)

## Contact

For questions or feedback, please contact:

- Email: williamscodigo@gmail.com

- GitHub: williamscodigo