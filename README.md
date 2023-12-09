# Tool Explanation Frontend

## Introduction:
This tool is designed to match users with books based on their preferences. It collects user input, sends it to a backend API, processes the data, and returns a list of recommended books.

## Technologies Used:

1. **React.js:**
   - Frontend framework to create a dynamic and responsive user interface.
   - Manages state, handles user input, and displays book recommendations.

2. **React-Bootstrap:**
   - Utilized for building responsive and visually appealing UI components like forms and cards.

3. **Axios:**
   - Used for making asynchronous HTTP requests to the backend API.

4. **Node.js (not shown in the provided code):**
   - Backend runtime for running the server and handling API requests.

5. **Express.js (not shown in the provided code):**
   - Backend framework to simplify the creation of API routes.



## Workflow:

1. **User Input:**
   - The user enters their name, interest in fantasy, preference for short stories, and liking for colorful narratives.

2. **Form Submission:**
   - Upon form submission, the input data is sent as a POST request to the backend API.

3. **Backend Processing:**
   - The backend receives the user preferences and uses vector difference to gather book data based on those preferences.

4. **Recommendation Generation:**
   - The backend processes the  data, applies an algorithm, and generates a list of recommended books.

5. **API Response:**
   - The backend sends the list of recommended books as a response to the frontend.

6. **Frontend Display:**
   - The frontend receives the book recommendations and dynamically updates the UI to display them.

## Why This Approach:

1. **React.js for User Interface:**
   - React.js is widely used for building interactive and reusable UI components, making it a suitable choice for frontend development.

2. **React-Bootstrap for Responsive Design:**
   - React-Bootstrap provides pre-designed, responsive components, allowing for faster and consistent UI development.

3. **Axios for HTTP Requests:**
   - Axios is a popular choice for making HTTP requests due to its simplicity and flexibility.

4. **Node.js and Express.js for Backend:**
   - Node.js allows for non-blocking, event-driven server operations, making it efficient for handling multiple requests.
   - Express.js simplifies the creation of API routes, enhancing backend development speed.


## Conclusion:
This tool leverages a modern tech stack to provide users with personalized book recommendations. The separation of frontend and backend allows for a modular and scalable architecture. The chosen technologies contribute to the overall efficiency and user-friendliness of the application.








# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**


## connecting to mongo database
add `mongo_url` in the .env file in root folder.


If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
