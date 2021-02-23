import React, { useEffect } from "react";
import { Link } from "react-router-dom";
//import { Col, Row, Container } from "../components/Grid";
import { ListItem, List } from "../components/List";
import DeleteBtn from "../components/ItemDeleteBtn";
import CreateMenuItem from "../components/CreateMenuItem";
//import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { useStoreContext } from "../utils/GLOBALSTATE";
import { SET_CURRENT_MENUITEM, LOADING, UPDATE_MENUITEMS, REMOVE_MENUITEM } from "../utils/actions";

//, ADD_FAVORITE, REMOVE_FAVORITE } 

function MenuItemList() {
    const [state, dispatch] = useStoreContext();

    const removeMenuItem = id => {
        API.deleteMenuItem(id).then(() => {
            dispatch({
                type: REMOVE_MENUITEM,
                _id: id
            });
        }).catch(err => console.log(err));
    };

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
console.log("menu items rendered");

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
                    <DeleteBtn onClick={() => removeMenuItem(currentMenuItem._id)}/>
                    </ListItem>
                ))}
            </List>
        ) : (
            <h3>You haven't added any menu items yet!</h3>
        )}

        
        <CreateMenuItem/>
    </div>

)

// everything below this could very well be shit


    
}

export default MenuItemList;