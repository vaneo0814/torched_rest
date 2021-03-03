import React, { useRef } from "react";
import { useStoreContext } from "../utils/GLOBALSTATE";
import { ADD_MENUITEM, LOADING } from "../utils/actions";
import API from "../utils/API";
//import Menu from "../pages/food"
import "./style.css"

function CreateItemForm() {

    const titleRef = useRef();
    const bodyRef = useRef();
    const priceRef = useRef();
    
    const [state, dispatch] = useStoreContext();


    const handleSubmit = () => {
        // e.preventDefault();

        dispatch({
            type: LOADING
        });
        API.saveMenuItem({
            title: titleRef.current.value,
            body: bodyRef.current.value,
            price: priceRef.current.value
        }).then(result => {
            dispatch({
                type: ADD_MENUITEM,
                currentMenuItem: result.data
            });
        }).then(function () {
            window.location.replace("/employeemenu");
        }).catch(err => console.log(err));
        //possible bug with above reroute

        titleRef.current.value = "";
        bodyRef.current.value = "";
        priceRef.current.value = "";
    };

/**
 * import React, { useRef } from "react";
import { useStoreContext } from "../utils/GLOBALSTATE";
import { ADD_MENUITEM, LOADING } from "../utils/actions";
import API from "../utils/API";
//import Menu from "../pages/food"

function CreateItemForm() {

    const titleRef = useRef();
    const bodyRef = useRef();
    const priceRef = useRef();
    
    const [state, dispatch] = useStoreContext();


    const handleSubmit = () => {
        // e.preventDefault();

        dispatch({
            type: LOADING
        });
        API.saveMenuItem({
            title: titleRef.current.value,
            body: bodyRef.current.value,
            price: priceRef.current.value
        }).then(result => {
            dispatch({
                type: ADD_MENUITEM,
                currentMenuItem: result.data
            });
        }).then(function () {
            window.location.replace("/menu");
        }).catch(err => console.log(err));

        titleRef.current.value = "";
        bodyRef.current.value = "";
        priceRef.current.value = "";
    };



    return (
        <div>
            <div className="jumbotron">
                Add Menu Item:
            </div>
            <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
                <input className="form-control mb-5" required ref={titleRef} placeholder="Name" />
                <textarea className="form-control mb-5" required ref={bodyRef} placeholder="Description" />
                <input className="form-control mb-5" required ref={priceRef} placeholder="Price" />
                <button className="btn btn-success mt-3 mb-5 mr-2" disabled={state.loading} type="submit" >
                    Save New Menu Item
                </button>

                
                <button className="btn btn-success mt-3 mb-5 ml-2"  type="submit" >
                    Go Back
                </button>
            </form>


        </div>
    );
}

export default CreateItemForm;

 */

    return (
        <div className="menuBackground">
            <h1 className="menu-header">
                Add Menu Item:
            </h1>
            <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
                <input className="form-control mb-5" required ref={titleRef} placeholder="Name" />
                <textarea className="form-control mb-5" required ref={bodyRef} placeholder="Description" />
                <input className="form-control mb-5" required ref={priceRef} placeholder="Price" />
                <button className="menu-btn" disabled={state.loading} type="submit" >
                    Save New Menu Item
                </button>
                
            </form>
            <button className="menu-btn"  type="submit" >
                    <a href="/employeemenu">
                    Go Back
                    </a>
                </button>

        </div>
    );
}

export default CreateItemForm;