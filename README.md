# User Card Grid Web Application

This is a web application built using React and styled-components. 
It displays a user card grid layout with a navbar using API call.

## Running the App

1. Clone the repository to your local machine:
   git clone https://github.com/your-username/user-card-grid.git
Navigate to the project directory:

2. Install the node dependency modules :
    npm install

3. Start the development server:
    npm start
This will start the application in development mode.
 Open http://localhost:3000 in your web browser to view it.

## Working 
The application is built using Create React App.

The main components of the application are:

Navbar: Displays the brand name and the "Get Users" button. On clicking the button, it triggers an API call to fetch user data.

UserCardGrid: Renders the user cards in a grid layout. It receives the user data as props and maps over it to render each user card.
The API call is made using the axios library.
When the "Get Users" button is clicked, the application makes a GET request to the ReqRes API to fetch user data.

A loading state is implemented using the useState hook. While the API call is in progress, the loading state is set to true, and a loader is displayed. Once the API call is completed, the loading state is set to false, and the user card grid is rendered with the fetched user data.

Custom Styling
The application uses the styled-components library for custom styling. Each component has its own styled component where the CSS properties are defined. The styles are applied using the className prop.

## Special Stuffs

Implemented error handling for failed API requests.
Improved the UI design and layout using SCSS.
Added animations and transitions for enhancement.

