import Story from "../components/Story.js"
import baseUrl from "../utils/baseUrl.js"
import view from '../utils/view.js';
import checkFavorite from "../utils/checkFavorite.js"
import store from "../store.js"


export default async function Stories(path) {
    //get our favorite with getstate object that our store is providing
    const { favorites } = store.getState();
    //iterate over story elemment, we want to check if a story is alrady in the favorites array
    //get stories
    const stories = await getStories(path);
    //check if we have stories to display 
    const hasStories = stories.length > 0; 

    view.innerHTML = `<div>
        ${hasStories 
            ? stories.map((story, i) => Story({...story, index: i + 1, isFavorite: checkFavorite(favorites, story)})).join("") : "No new Story"}
    </div>`;  
    
    document.querySelectorAll('.favorite').forEach(favoriteButton => {
        favoriteButton.addEventListener('click', async function() {
            const story = JSON.parse(this.dataset.story);  
            const isFavorited = checkFavorite(favorites, story);
            store.dispatch({ type: isFavorited ? "REMOVE_FAVORITE" : "ADD_FAVORITE", payload: { favorite: story } })  
            await Stories(path);
        }); 
     });
    }

     async function getStories(path) {
     const isHomeRoute = path === '/';
     const isNewRoute = path === '/new';
     if (isHomeRoute) {
       path = '/news';  
     } else if (isNewRoute) {
       path = '/newest';  
     } 
     const response = await fetch(`${baseUrl}${path}`);
     const stories = await response.json();
     return stories;
}