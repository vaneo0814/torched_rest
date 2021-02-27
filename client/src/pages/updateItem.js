import React, { useRef } from "react";
import { useStoreContext } from "../utils/GLOBALSTATE";
import { ADD_MENUITEM, LOADING, UPDATE_MENUITEM } from "../utils/actions";
import API from "../utils/API";
//import Menu from "../pages/food"

function UpdateItemForm() {
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

  

    const handleSubmit = () => {
        // e.preventDefault();
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

        dispatch({
            type: LOADING
        });
        API.updateMenuItem({
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
                <input className="form-control mb-5" required ref={titleRef} placeholder="Name"></input>
                <textarea className="form-control mb-5" required ref={bodyRef} placeholder="Description" />
                <input className="form-control mb-5" required ref={priceRef} placeholder="Price" />
                <button className="btn btn-success mt-3 mb-5 mr-2" disabled={state.loading} type="submit" >
                    Save Updated Item
                </button>

                {/* not working because of required ref */}
                <button className="btn btn-success mt-3 mb-5 ml-2"  type="submit" >
                    Go Back
                </button>
            </form>


        </div>
    );
}

export default UpdateItemForm;