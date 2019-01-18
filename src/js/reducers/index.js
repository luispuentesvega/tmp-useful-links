import * as actionTypes from '../constants/action-types';

const initialState = {
    links: [],
    topics: [],
    error: '',
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_LINK_SUCCESS:
            return {
                ...state,
                links: state.links.concat(action.link),
            };
        case actionTypes.GET_LINKS_SUCCESS:
            return {
                ...state,
                links: action.links,
            };
        case actionTypes.GET_TOPICS_SUCCESS:
            return {
                ...state,
                topics: action.topics,
            };
        case actionTypes.EDIT_LINK_SUCCESS:
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default rootReducer;
