import React, { useRef, useState, useEffect } from "react";
import { useStoreContext } from "../utils/GLOBALSTATE";
import { ADD_MENUITEM, LOADING, UPDATE_MENUITEM } from "../utils/actions";
import API from "../utils/API";
//import Menu from "../pages/food"

function UpdateItemForm(props) {

    const url = window.location.pathname.split("/")
    const menuId = url[url.length-1];

    let [menuObj, setMenuObj] = useState();
    
    useEffect(() => {
        API.getMenuItem(menuId).then(res => {
            setMenuObj(res.data)
            updateform(res.data)
        });
    }, []);
    
    console.log(menuObj)

    const titleRef = useRef();
    const bodyRef = useRef();
    const priceRef = useRef();

    const [state, dispatch] = useStoreContext();

    // const updateMenuItem = (id) => {
    //     console.log("update clicked");
    //     API.updateMenuItem(id).then(results => {
    //         dispatch({
    //             type: UPDATE_MENUITEM,
    //             currentMenuItem: results.data
    //         });
    //     }).then(function () {
    //         window.location.replace("/menu");
    //     }).catch(err => console.log(err))
    // };

    function updateform (data) {
        console.log(data)
        document.getElementById('name').value = data.title;
        document.getElementById('description').value = data.body;
        document.getElementById('price').value = data.price;
    }

  

    const handleSubmit = () => {

        dispatch({
            type: LOADING
        });
        API.updateMenuItem(menuId,{
            title: titleRef.current.value,
            body: bodyRef.current.value,
            price: priceRef.current.value
        }).then(result => {
            dispatch({
                type: UPDATE_MENUITEM,
                currentMenuItem: result.data
            });
        }).then(function () {
            window.location.replace("/menu");
        }).catch(err => console.log(err));

        // titleRef.current.value = "";
        // bodyRef.current.value = "";
        // priceRef.current.value = "";
    };



    return (
        <div>
            <div className="jumbotron">
                Update Menu Item:
            </div>
            <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
                <input id="name" className="form-control mb-5" required ref={titleRef} placeholder="Name"></input>
                <textarea id="description" className="form-control mb-5" required ref={bodyRef} placeholder="Description" />
                <input id="price" className="form-control mb-5" required ref={priceRef} placeholder="Price" />
                <button className="btn btn-success mt-3 mb-5 mr-2" disabled={state.loading} type="submit" >
                    Save Updated Item
                </button>

                {/* not working because of required ref */}
                
            </form>

<button className="btn btn-success mt-3 mb-5 ml-2"  type="submit" >
                    <a href="/menu">
                    Go Back
                    </a>
                </button>
        </div>
    );
}

export default UpdateItemForm;