import { ADD_LINK } from "../constants/action-types";

export function addLink(payload) {
    return {
        type: ADD_LINK,
        payload
    }
}