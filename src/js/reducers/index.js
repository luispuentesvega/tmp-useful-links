import * as actionTypes from "../constants/action-types";

const initialState = {
    links: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_LINK:
            return Object.assign({}, state, {
                links: state.links.concat(action.payload)
            });
        default:
            return state;
    }
}

export default rootReducer;