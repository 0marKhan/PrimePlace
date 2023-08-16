# PrimePlace, a real estate website implemented with RapidAPI's

## Uses Bayut API from RapidAPI's website to get real estate data from API calls and display estates on rent and for sale

This project is a website built for practicing and utilizing data from API calls, and displaying them on the frontend for to the user to see. The website was made using these steps

- fetching the data from the Bayut API after registering on the site
- loading that data and storing it into redux store
- redux persist is used to rehydrate the Redux store across page reloads or restarts
- only rerendering the API call if the redux store is empty to prevent unnecessary API calls, as the Bayut API has limited calls per month (500 fixed)
- two calls are made to the API, the first one to estates on rent and the second to estates on sale which are then displayed to the user
- routing for multiple pages to show home, rent estates and estates for sale done using react-router-dom
- If an estate is clicked it leads to another page that gives description of the estate
- Search option added for rent estates and estates for sale that let you filter estates based on price, rooms, and baths

## Technologies Used

- ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white)
- ![Redux](https://img.shields.io/badge/-Redux-764ABC?logo=redux&logoColor=white)
- ![Tailwind CSS](https://img.shields.io/badge/-Tailwind%20CSS-38B2AC?logo=tailwind-css&logoColor=white)
- ![Material UI](https://img.shields.io/badge/-Material%20UI-0081CB?logo=material-ui&logoColor=white)
- ![Axios](https://img.shields.io/badge/-Axios-46A2F1?logo=axios&logoColor=white)
- ![Jest](https://img.shields.io/badge/-Jest-C21325?logo=jest&logoColor=white)

## Click on the image to watch a video demo of the website!

<p align="center">
  <a href="https://youtu.be/bCp-hb7S_us" target="_blank">
    <img src="https://i9.ytimg.com/vi_webp/bCp-hb7S_us/mq2.webp?sqp=CNCm9KYG-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgWShDMA8=&rs=AOn4CLCet665ZBJ52S5W8SrKQZQyb3AOjQ" alt="Website demo!" width="240" height="180" border="10"/>
  </a>
</p>

## How to get the project working on your device

- clone the repository
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
- navigate to the project directory and install all dependencies
  ```sh
   npm install
   ```
- create an account on rapid API
- go to the Bayut API and subscribe to it
- copy your API key and replace it with the API key currently in the project
- run the project
   ```sh
     npm start
     ```
