import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ListItem, List } from "../components/List";
import DeleteBtn from "../components/ItemDeleteBtn";
import UpdateBtn from "../components/UpdateBtn";
import API from "../utils/API";
import { useStoreContext } from "../utils/GLOBALSTATE";
import { LOADING, GET_MENUITEMS, REMOVE_MENUITEM } from "../utils/actions";

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
        // API.updateMenuItem(id).then(results => {
        //     dispatch({
        //         type: UPDATE_MENUITEM,
        //         currentMenuItem: results.data               
        //     });
            
        // })
        // .then(function () {
        //     window.location.replace("/updateitem");
        // })
        // .catch(err => console.log(err))
    };

    useEffect(() => {
        getMenuItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

console.log(state);
console.log("menu items rendered");

return (
    <div>
        <h1 className="menuHeader">Menu</h1>
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