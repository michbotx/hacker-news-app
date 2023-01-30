export default function Comment(comment) {
    //check if there is an array of  nested comments
    const hasNestedComments = comment.comments.length > 0;

    return `
    <div class="nested-comments-${comment.level}">
        <p class="comment-header">
            ${comment.user} | ${comment.time_ago}
        </p>
        ${comment.content} 
        ${hasNestedComments 
            ? comment.comments.map(comment => Comment(comment)).join("") 
            : ""}
    </div>
    `
        
}

//recursion --> calling a fn within itself, alternative way of writing for loops