import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ListItem, List } from "../components/List";
import DeleteBtn from "../components/ItemDeleteBtn";
import UpdateBtn from "../components/UpdateBtn";
import API from "../utils/API";
import { useStoreContext } from "../utils/GLOBALSTATE";
import { LOADING, GET_MENUITEMS, REMOVE_MENUITEM } from "../utils/actions";
//import {Container} from "mdbreact"
import "./style.css"

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
            type: GET_MENUITEMS,
            menuItems: results.data
            });
        }).catch(err => console.log(err))
    };

    const updateMenuItem = (id) => {
        window.location.replace("/updateitem/" + id)
    };

    useEffect(() => {
        getMenuItems();
    }, []);

console.log(state);
console.log("menu items rendered");

return (
    <div className="menuBackground">
            <h1 className="menu-header">Menu</h1>
        {state.menuItems.length ? (
            <List>
                {state.menuItems.map(currentMenuItem => (
                    <ListItem className="menu-list-item" key={currentMenuItem._id}> 
                    <Link to={"/menu/" + currentMenuItem._id}>
                       <strong>
                        {currentMenuItem.title} - {currentMenuItem.price} : {currentMenuItem.body}
                    </strong> 
                    </Link>
                    <DeleteBtn onClick={() => removeMenuItem(currentMenuItem._id)}/>

                    <UpdateBtn onClick={() => updateMenuItem(currentMenuItem._id)}/>                      
                    </ListItem>
                ))}
            </List>
        ) : (
            <h3>You haven't added any menu items yet!</h3>
        )}
        
        
        
        
{/* this needs to be a link to the update page like in update blog post */}
       {/* <CreateMenuItem/> */}
       <Link to={"/additem"} className="menu-btn" role="button" tabIndex="0">Add New Menu Item Here</Link>
    </div>

)

// everything below this could very well be shit


    
}

export default MenuItemList;