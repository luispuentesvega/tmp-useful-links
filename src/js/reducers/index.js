import * as actionTypes from '../constants/action-types';

const initialState = {
    links: [],
    groups: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_LINK:
            let updatedGroups = { ...state.groups };
            updatedGroups[action.link.topic].push(action.link);
            return {
                ...state,
                links: state.links.concat(action.link),
                groups: updatedGroups,
            };
        case actionTypes.DATA_LOADED:
            return {
                ...state,
                links: action.links,
            };
        case actionTypes.SET_TOPICS:
            return {
                ...state,
                topics: action.topics,
            };
        case actionTypes.DATA_GROUPS_LOADED:
            return {
                ...state,
                groups: action.groups,
            };
        default:
            return state;
    }
};

export default rootReducer;
