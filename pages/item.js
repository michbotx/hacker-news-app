import view from "../utils/view.js"
import Story from "../components/Story.js"

export default async function Item() {

    const story = await getStory()//retrieve the data
    const hasComments = story.comments > 0;
    const isQuestion =  story.title.includes("Ask")

    view.innerHTML = `
    <div>
    ${Story(story)}
    </div>
    <hr/>

    <div class="gray" style="height: 100%; width: 100%">
    ${story.title}
    <div style="font-size:12px">
        ${story.points} by ${story.user} ${story.time_ago}
        |
        hide
        |
        past
        |
        favorite
        | 
        discuss 
    </div>

    ${story.content}
    
    <div>
    </div>
    ${isQuestion ? `<input type="textarea" style="height:200px; display: block">  </input> <button>add comment</button>` : ""}
    <div> 
    ${hasComments ? "story.comments" : ""}
    </div>

    </div>`
}

async function getStory() {
    const storyId = window.location.hash.split("?id=")[1] // operates on a string and return an array
    //use this item id to retrieve the individual story
    // /item/:itemId
    const response = await fetch(`https://node-hnapi.herokuapp.com/item/${storyId}`)
    const story = await response.json()
    return story;
}