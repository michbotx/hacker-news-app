export default function Story(story) {
    return `    
    <div class="story">
        <span class="gray"> ${story.index || "" }</span>
        <span class="upvote">▲ </span>
        <a style="font-size: 18px" href="${story.url}">${story.title}</a>

        <div>
            <div class="gray">${story.points} points by ${story.user} ${story.time_ago}
            | <a href="#/item?id=${story.id}">
            ${story.comments_count} comments </a>
            | 
            <span class="favorite">
            <img class="heart" src="images/heart-solid.svg">
            Add to Favorites
            </span>
        </div>
        <div> 

    </div>
    `
}