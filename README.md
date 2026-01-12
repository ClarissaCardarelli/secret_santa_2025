# Christmas Hangman Mini Game 🎮

This project is Christmas-themed Hangman-like game built to practice full-stack development. It was created as a secret santa gift for a fellow developer.

**Live Demo:**

![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat&logo=postgresql&logoColor=white)


## About

The goal of this project is to practice building a full-stack app, connecting a frontend and backend and adding a database with RESTful APIs.

This project is based on the classic Hangman game where players guess letters to reveal a hidden word. Each word describes the gift's recipient, Emeric. The goal is to reveal as many words as possible and players are allowed 7 mistakes before the game ends.

Player scores are recorded using a backend powered by Express and a PostgreSQL database hosted on Neon.

## Features

- Classic Hangman gameplay  
- Responsive layout for desktop and mobile   
- Backend API built with Express  
- Score recording system connected to a database 

## Tech Stack

### Frontend
- **React**
- **TypeScript** 
- **Vite**
- **CSS** 

### Backend
- **Node.js** 
- **Express** 

### Database
- **PostgreSQL** 
- **Neon** 

## Installation

To run this project locally:

1. Clone the repository.
  
2. Install frontend dependencies:
   ```bash
   cd client
   npm install
3. Install backend dependencies:
   ```bash
   cd server
   npm install
4. Create a database (locally or using a cloud provider like Neon).
5. Create a .env file in the server folder and define the connection variables.
6. Start frontend:
   ```bash
   cd client
   npm run dev
7. Start backend:
   ```bash
   cd server
   npm run dev
## Future Improvements

- **Player Avatars:** Allow players to choose or upload a custom profile photo that will appear on the scoreboard page.  
- **Keyboard Controls:** Allow players to guess letters by typing on their keyboard in addition to clicking on-screen buttons.  
- **Background Music:** Add Christmas-themed music.  
- **Custom Words & Photos:** Allow players to create their own word list, upload a custom photo for the santa character, and share this personalized game link with others.
- **Monorepo Structure:** Merge `client` and `server` into a single repository managed with a monorepo tool, allow installing all dependencies and starting both frontend and backend with a single command. 
- **Responsive Design Enhancements:** Improve layout and styling for tablet devices. Currently, some elements may be misaligned or overlap on medium screen sizes.  


## Contributing

Feel free to contact me to report issues or suggestions for improvements.
