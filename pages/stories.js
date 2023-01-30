import view from '../utils/view.js';
import Story from "../components/Story.js"

export default async function Stories(path) {
    //get stories
    const stories = await getStories(path);
    //check if we have stories to display 
    const hasStories = stories.length > 0; 

    view.innerHTML = `<div>
        ${hasStories 
            ? stories.map((story, i) => Story({...story, index: i + 1})).join("") 
            : "No new Story"}
    </div>`;  
}

async function getStories(path) {
    const isHomeRoute = path === "/"
    const isNewRoute = path === "/new"

    if (isHomeRoute) {
        path = "/news"
    } else if (isNewRoute) {
        path = "/newest"
    }

    const response = await fetch(`https://node-hnapi.herokuapp.com${path}`)
    const stories = await response.json();
    return stories;
}