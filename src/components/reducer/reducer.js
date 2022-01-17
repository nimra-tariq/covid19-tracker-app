import { useReducer } from "react";
export const myReducer = (state, action) => {
    switch (action.type) {
        case 'getCountryName':
            return {
                ...state,
                cname: action.cname
            };

        default:
            break;
    }
}