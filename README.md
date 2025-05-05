# Aniland

## Description

Aniland is a personal side project built with [React](https://reactjs.org/) and the Context API, inspired by the anime community platform [AniList](https://anilist.co/). The goal is to showcase modern React development practices and frontend skills.

👉 [Live Demo](https://aniland.vercel.app/)

### Screenshots

**Home Page**  
![Home Page](public/screenshots/home.png)

**Single Anime View**  
![Single Anime](public/screenshots/anime-detail.png)

**Filters Results**  
![Filters Results](public/screenshots/filters-result.png)

---

## Getting Started

To run the project locally:

npm install
npm run dev
Then open http://localhost:3000 in your browser.


##Technical Notes
This project uses modern features like custom hooks, Context API for state management, and Higher-Order Components to reuse logic. 
The layout relies heavily on CSS Grid and Flexbox, even for more complex UI like hover effects.

##Areas for Improvement
One area I believe could be improved is the overall architectural design pattern. 
Since the project was built entirely from scratch, some structural compromises were inevitable. 
Also, some data fetching isn’t optimized. For example, the Home Page makes extra requests even though the data is already stored in Context, which doesn’t scale well.