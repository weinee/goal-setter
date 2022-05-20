#Goals App - MERN Stack

Tutorial from [Learn The MERN Stack](https://youtu.be/-0exw-9YJBo). Code has been slightly altered to include things that are not in the tutorial.

#Todo

- [ ] Add proxy
- [x] Update goal status
- [x] Strikethrough completed goals
- [x] Change grid to flex column
- [x] Word wrap
- [ ] Read up on redux toolkit

#-- Backend --
#Initial Steps
1. Create a new project
2. Create two new folders - backend and frontend
3. In the backend folder, create a new file - server.js
4. In root, run npm init
5. Create .gitignore file
6. Install dependencies in root
7. git init, git add ., git commit -m "Initial commit"
8. create .env file

#Routes
1. Configure server.js with express
2. Make a new folder in backend called routes - routes is used to ensure that the server.js is not cluttered with tons of routes

#Controller
1. Create a new folder in backend called controllers
2. Controller is used to simplify the routes. It is a class that contains methods that are used to handle the routes.

#Middleware
1. Create a new folder in backend called middleware
2. In the middleware folder, create an errorMiddleware and authMiddleware file

#Config
1. Create a new folder in backend called config
2. In the config folder, create a new file called db.js
3. db.js contains to settings to connect to the database
4. call connectDB() in server.js

#Model
1. Create a new folder in backend called models
2. Schemas are created in this folder

#-- Frontend --
#Initial Steps
1. In root, npm create vite@latest frontend --template react 
2. In root, npm install react-redux @reduxjs/toolkit react-router-dom react-icons
3. Optional. npm i -D concurrently

#Note
If there is an issue with CORS, do the following.
1. In root, npm i cors 
2. Add middleware to server.js
   ```
   const cors = require("cors")
   const whitelist = ["http://localhost:3000"]
   const corsOptions = {
   origin: function (origin, callback) {
   if (!origin || whitelist.indexOf(origin) !== -1) {
   callback(null, true)
   } else {
   callback(new Error("Not allowed by CORS"))
   }
   },
   credentials: true,
   }
   app.use(cors(corsOptions))
   ```
