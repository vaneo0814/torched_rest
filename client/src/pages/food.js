import React, { useEffect } from "react";
import { Link } from "react-router-dom";
//import { Col, Row, Container } from "../components/Grid";
import { ListItem, List } from "../components/List";
//import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { useStoreContext } from "../utils/GLOBALSTATE";
import { SET_CURRENT_MENUITEM, LOADING, UPDATE_MENUITEMS } from "../utils/actions";

//, ADD_FAVORITE, REMOVE_FAVORITE } 

function MenuItemList() {
    const [state, dispatch] = useStoreContext();

    const getMenuItems = () => {
        dispatch({type: LOADING });
        API.getMenuItems().then(results => {
            dispatch ({
            type: UPDATE_MENUITEMS,
            menuItems: results.data
            });
        }).catch(err => console.log(err))
    };

    useEffect(() => {
        getMenuItems();
    }, []);
console.log(state);
return (
    <div>
        <h1>Menu</h1>
        {state.menuItems.length ? (
            <List>
                {state.menuItems.map(currentMenuItem => (
                    <ListItem key={currentMenuItem._id}> 
                    <Link to={"/menu/" + currentMenuItem._id}>
                       <strong>
                        {currentMenuItem.title} - {currentMenuItem.price} : {currentMenuItem.body}
                    </strong> 
                    </Link>
                    </ListItem>
                ))}
            </List>
        ) : (
            <h3>You haven't added any menu items yet!</h3>
        )}
    </div>

)

// everything below this could very well be shit


    
}

export default MenuItemList;