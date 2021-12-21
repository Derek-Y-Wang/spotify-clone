export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    token: null  
    // token: "BQBVPuGbK52mqvJ07yx_rdRX3MZUac-NEsRgTyDZPjf4oRsuNNh3gYArHRkY3EdZ-aNeY8mcme15C1hQSdi93eicPsFLNcJmuKfGgWzA7OGIaQo_QF1GtZDULqwAgTZH65_eAdFEigpP-NnUTn9m1Mtvx18ZpaHIY5dURtsycghIZjsZ"
};

const reducer = (state, action) => {
    console.log(action);
    // Action => type, [payload]
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        
            case 'SET_TOKEN':
                return {
                    ...state,
                    token: action.token
                };
            case "SET_PLAYLISTS":
                return {
                    ...state,
                    playlists: action.playlists,
                };
            case 'SET_DISCOVER_WEEKLY':
                return {
                    ...state,
                    discover_weekly: action.discover_weekly,
                };
        default:
            return state;
    }
};

export default reducer;