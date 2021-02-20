import React, { createContext, useReducer, useContext } from "react";
import {
    SET_CURRENT_MENUITEM,
    REMOVE_MENUITEM,
    UPDATE_MENUITEMS,
    ADD_MENUITEM,
    LOADING,
    UPDATE_MENUITEM
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
    switch (action.type) {
        case SET_CURRENT_MENUITEM:
            return {
                ...state,
                currentMenuItem: action.menuItem,
                loading: false
            };

        case UPDATE_MENUITEMS:
            return {
                ...state,
                menuItems: [...action.menuItems],
                loading: false
            };

        //might be shite
        case UPDATE_MENUITEM:
            return {
                ...state,
                currentMenuItem: action.currentMenuItem,
                loading: false
            }
        //

        case ADD_MENUITEM:
            return {
                ...state,
                menuItems: [action.menuItem, ...state.menuItems],
                loading: false
            };

        case REMOVE_MENUITEM:
            return {
                ...state,
                menuItems: state.menuItems.filter((menuItem) => {
                    return menuItem._id !== action._id;
                })
            };

        case LOADING:
            return {
                ...state,
                loading: true
            };

        default:
            return state;
    }
};

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        menuItems: [],
        currentMenuItem: {
            _id: 0,
            title: "",
            price: "",
            body: ""
        }
    });

    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
