import * as actionTypes from "../constants/action-types";
import axios from "../../axios-links";
import store from "../store/index";

export const addLinkSuccess = (payload) => {
    return {
        type: actionTypes.ADD_LINK,
        link: payload
    }
};

export const addLink = (payload) => {
    return dispatch => {
        axios.post("links.json", payload)
            .then(response => {
                dispatch(addLinkSuccess(payload));
            })
            .catch(error=> {
                console.log("Error:::::::", error);
            })
    }
};

export const dataLoaddedSuccess = (links) => {
    return {
        type: actionTypes.DATA_LOADED,
        links: links
    }
};

export const dataGroupsLoaddedSuccess = (groups) => {
    return {
        type: actionTypes.DATA_GROUPS_LOADED,
        groups: groups
    }
};

export const dataLoaded = () => {
    return dispatch => {
        axios.get("/links.json")
            .then(res => {
                const _store = store.getState();

                console.log("Getting Links : ",_store.topics);

                const groups = [];
                for (let key in _store.topics) {
                    if (key == "0") {
                        continue;
                    }
                    groups.push(_store.topics[key].value);
                }

                const fetchedGroups = [];
                for (let gp in groups) {
                    let tmpLinks = [];
                    for (let key in res.data) {
                        if (res.data[key].topic != groups[gp]) {
                            continue;
                        }
                        tmpLinks.push({
                            ...res.data[key],
                            id: key
                        });
                    }
                    fetchedGroups[groups[gp]]= tmpLinks;
                }
                const fetchedLinks = [];
                for (let key in res.data) {
                    fetchedLinks.push({
                        ...res.data[key],
                        id: key
                    });
                }

                console.log("fetchedGroups::",fetchedGroups);

                dispatch(dataLoaddedSuccess(fetchedLinks));
                dispatch(dataGroupsLoaddedSuccess(fetchedGroups));
            })
            .catch(err => {
                console.log("Error:::::::::", err);
            });
    }
};

export const setTopics = (topics) => {
    return {
        type: actionTypes.SET_TOPICS,
        topics: topics
    }
};

export const initTopics = () => {
    return dispatch => {
        axios.get("https://react-links-1df04.firebaseio.com/topics.json")
            .then(res => {
                const fetchedTopics = [{
                    value: 0,
                    label: "..Choose a Topic..."
                }];
                for (let key in res.data) {
                    fetchedTopics.push({
                        value: key,
                        label: key
                    });
                }
                dispatch(setTopics(fetchedTopics));
            })
            .catch(err=> {
                console.log("Errror: ",err);
            });
    }
};