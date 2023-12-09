# # Book Matching Web Tool Explanation Frontend
 

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


# Book Matching Web Tool Explanation (Backend)

## Overview

The Book Matching Web Tool is designed to recommend books to users based on their preferences. It utilizes a full-stack architecture, involving a React.js frontend for user interaction, an Express.js backend for API handling, and MongoDB for database storage.

## Technologies Used

- **Express.js:** A backend framework for handling API requests, enabling the server to respond to user inputs.

- **MongoDB:** A NoSQL database used to store user information and book data.

- **React.js:** A JavaScript library for building dynamic and interactive user interfaces.

- **Axios:** A promise-based HTTP client used to make asynchronous requests between the frontend and backend.

- **Cors:** Middleware used to enable Cross-Origin Resource Sharing, allowing the frontend to communicate with the backend.

## Workflow

1. **User Input:**
   - Users provide their name and preferences regarding interest in fantasy, preference for short stories, and liking for colorful narratives through a React.js-based form.

2. **Backend Processing:**
   - The Express.js backend receives the user input and stores it in the MongoDB database as a new user instance.

3. **Vector Calculation:**
   - A vector representing the user's preferences is created based on the input.

4. **Book Matching:**
   - The backend retrieves book data from the MongoDB database and compares each book's vector with the user's vector using Euclidean distance.

5. **Similarity Threshold:**
   - Books with Euclidean distances below a predefined threshold (SIMILARITY_THRESHOLD) are considered matches.

6. **Sorting and Filtering:**
   - The matched books are sorted based on the difference in preferences, and the top matches (up to MAX_MATCHES) are selected.

7. **Response:**
   - The top book matches are sent as a JSON response to the React.js frontend.

## **Explaination of how I calculate the difference of vectors to look for books that match.**

The provided JavaScript code defines a function named calculateVectorDifference which calculates the Euclidean distance between two vectors. Here's a breakdown of the code:

1. The function calculateVectorDifference takes two arguments, vector1 and vector2, which are expected to be arrays of numbers representing vectors of the same dimension.

2. It first checks if the two vectors have the same length. If not, it throws an error with the message "Vectors must be of the same length". This is because the Euclidean distance can only be calculated between vectors of the same dimension.

3. It initializes a variable sumOfSquares to zero. This variable will be used to accumulate the squares of the differences between corresponding elements of the two vectors.

4. The function then iterates over the elements of the vectors using a for loop. Inside the loop, it subtracts the element of vector2 from the corresponding element of vector1, squares the result, and adds it to sumOfSquares.

5. After the loop, it returns the square root of sumOfSquares. This is the Euclidean distance between the two vectors, which is the square root of the sum of the squares of the differences between corresponding vector elements.

6. Finally, the function is made available for import by other files through module.exports = calculateVectorDifference;. This line exports the function so that it can be required in another JavaScript file using Node.js's require function.

The **Euclidean** distance is a measure of the straight line distance between two points in Euclidean space. In this context, it's being used to measure the distance between two points represented by vectors



## Why This Approach

- **React.js for User Interface:**
  - React.js provides a modular and efficient way to build interactive UI components, enhancing the user experience.

- **Express.js for Backend:**
  - Express.js simplifies the creation of API routes, handling user requests efficiently.

- **MongoDB for Database:**
  - MongoDB, being a NoSQL database, allows for flexible and scalable data storage.


- **Vector-based Matching:**
  - Using vectors and Euclidean distance facilitates a mathematical approach to matching user preferences with books, providing a personalized recommendation system.

## Conclusion

The Book Matching Web Tool combines a variety of technologies to create a seamless and personalized book recommendation experience for users. The chosen tech stack ensures scalability, modularity, and efficiency throughout the application.






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
