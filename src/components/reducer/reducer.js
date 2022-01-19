import { useReducer } from "react";
export const myReducer = (state, action) => {
    switch (action.type) {
        case 'getCountryName':
            return {
                ...state,
                cname: action.cname
            };
        case 'getStats':
            return {
                ...state,
                TotalCases: action.TotalCases,
                TotalDeaths: action.TotalDeaths,
                TotalRecovered: action.TotalRecovered
            }
        default:
            break;
    }
}