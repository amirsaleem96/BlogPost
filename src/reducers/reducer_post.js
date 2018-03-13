import FETCH_POST from 'fetch_post';
export default function( state, action ){
    switch ( action.type ) {
        case FETCH_POST: return action.payload.data;
        default: return state
    }
    return state;
}