export default function checkFavorite(favorites, story) {
    return favorites.some(favorite => favorite.id === story.id) // will check if a condition is true

}

