//global state of our app will be called store 
//collect all our fave stories and share it across our app
//globaal data storage is called astore
//get state and set state

// const reducer = (state, action) => newState;

//use function to create a store to get state and dispatch our actions. this function will accept our reduccer
function createStore(reducer) {
    let currentState = reducer(undefined, {}) // sets our initial state as undefined and a second parameter is an empty object 

    return {
        getState: () => currentState, // call this anytime to give us the current state
        dispatch: action => {
            currentState = reducer(currentState, action)
        } // this will pass on the action to our reducer
    }
}

//reducers are managed in objects
const initialState = {
    favorites: []
}

//default to default parameter if state is not available
function favoritesReducer(state = initialState,action) {
    switch(action.type) {
        case "ADD_FAVORITE":{
            const addedFavorite =  action.payload.favorite
            const favorites = [...state.favorites, addedFavorite]
            return { favorites };
        }   
        case "REMOVE_FAVORITE":{
            const removedFavorite = action.payload.favorite
            const favorites = state.favorites.filter(favorite => favorite.id !== removedFavorite.id)
            return {favorites}}
        default:
            return state
    }
}
//switch depdning on action. what do we wnat to do? 
//addtofavorites, and removefavorites

const action = {type:"ADD_FAVORITE", payload: {favorite: {title: "story1", id:1}} }

//how are we going to collect alllll these favorites? Manage in an array. 

//payload helps provide data for us and is provided as an object

const store = createStore(favoritesReducer)
store.dispatch(action);
console.log(store.getState())
export default store;