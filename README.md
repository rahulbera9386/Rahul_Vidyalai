# Project Name

## Overview

This project involves a series of tasks to enhance the functionality and user interface of a React application. Below is the detailed list of tasks completed along with their status:

## Completed Tasks

- [✔] **Fix carousel scrolling UI**: Ensure a new image is shown when navigation buttons are clicked. Center the carousel navigation buttons vertically relative to the image.

- [✔] **Replace dummy images**: Fetch each album of posts using the endpoint "https://jsonplaceholder.typicode.com/albums/1/photos" in the `/api/v1/posts` route.

- [✔] **Make the top nav bar sticky**: Ensure the top navigation bar remains fixed at the top during scrolling.

- [✔] **Implement functionality to load more posts**: Load more posts upon clicking the "Load More" button. Hide the "Load More" button if no posts exist.

- [✔] **Display the user's name and email in each post**: Show the first letter for both the first and last names.

- [✔] **Convert `UserList` React class component to a functional component**: Replace `witUserData` HOC with a custom React hook.

- [✔] **Convert `useWindowWidth` hook to ContextAPI**: Declare the ContextAPI globally and access the `isSmallerDevice` property.

## Project Structure

- **`/components`**: Contains all the component files.
- **`/api`**: Contains API endpoint files.
- **`/hooks`**: Contains custom hooks.
- **`/styles`**: Contains all styling files.

## Detailed Instructions

### 1. Carousel Scrolling UI

- Updated the carousel component to handle scrolling and centered the navigation buttons vertically.

### 2. Fetching Images

- Used the endpoint `"https://jsonplaceholder.typicode.com/albums/1/photos"` to fetch images for each post in the `/api/v1/posts` route.

### 3. Sticky Nav Bar

- Implemented CSS styling to ensure the navigation bar stays at the top during scroll events.

### 4. Load More Functionality

- Added a "Load More" button that fetches additional posts. The button is hidden if there are no more posts to load.

### 5. Display User Information

- Updated the post component to display the user's name and email, showing the first letter of both the first and last names.

### 6. Conversion to Functional Components and Hooks

- Refactored `UserList` component from a class component to a functional component and replaced the `witUserData` HOC with a custom hook.
- Converted the `useWindowWidth` hook to use ContextAPI.

## Getting Started

### Prerequisites

- Node.js and npm installed
- A running local server

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/rahulbera9386/Rahul_Vidyalai.git
   
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

### Usage

- Navigate to `http://localhost:3000` in your browser to view the application.


## Contributing

Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.


Thank you for checking out the project!
