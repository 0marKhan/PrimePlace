# PrimePlace, a real estate website implemented with RapidAPI's

## Uses Bayut API from RapidAPI's website to get real estate data from API calls and display estates on rent and for sale

## [View the website live](https://prime-place.netlify.app)

This project is a website built for practicing and utilizing data from API calls, and displaying them on the frontend for to the user to see. The website was made using these steps

<p align="center">
    <img src="./prime-place.png" alt="website image" width="1347"  border="10"/>
</p>

- fetching the data from the Bayut API after registering on the site
- loading that data and storing it into redux store
- redux persist is used to rehydrate the Redux store across page reloads or restarts
- only rerendering the API call if the redux store is empty to prevent unnecessary API calls, as the Bayut API has limited calls per month (500 fixed)
- two calls are made to the API, the first one to estates on rent and the second to estates on sale which are then displayed to the user
- routing for multiple pages to show home, rent estates and estates for sale done using react-router-dom
- If an estate is clicked it leads to another page that gives description of the estate
  
<p align="center">
    <img src="./estate description.png" alt="website image" width="1347"  border="10"/>
</p>

- Search option added for rent estates and estates for sale that let you filter estates based on price, rooms, and baths

<p align="center">
    <img src="./search.png" alt="website image" width="1347"  border="10"/>
</p>

- Test cases written with jest

## Technologies Used

- [![React](https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
- [![Redux](https://img.shields.io/badge/-Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux.js.org/)
- [![Tailwind CSS](https://img.shields.io/badge/-Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
- [![Material UI](https://img.shields.io/badge/-Material%20UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)](https://mui.com/)
- [![Axios](https://img.shields.io/badge/-Axios-46A2F1?style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/)
- [![Jest](https://img.shields.io/badge/-Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/)


## Click on the image to watch a video demo of the website!

<p align="center">
  <a href="https://youtu.be/bCp-hb7S_us" target="_blank">
    <img src="https://www.compass.com/m/258277bf0d5561a8d89d87111d3a17e10c3590fd_img_0_2da11/origin.jpg" alt="Website demo!" width="240" height="180" border="10"/>
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
- go to the Bayut API and subscribe to it [Bayut API](https://rapidapi.com/apidojo/api/bayut)
- copy your API key and replace it with the API key currently in the project
- run the project
   ```sh
     npm start
     ```

## Important Notes

- if the site takes time to load sometimes its because of its high latency mentioned in the site (1,712ms)
- if on starting no data is rendered it would be because the monthly quota of 500 requests(fixed) have been used up
