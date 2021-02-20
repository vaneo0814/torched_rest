import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GLOBALSTATE";
import { ADD_MENUITEM, LOADING } from "../../utils/actions";
import API from "../../utils/API";

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
                <input className="form-control mb-5" required ref={titleRef} placeholder="Name"/>
                <textarea className="form-control mb-5" required ref={bodyRef} placeholder="Description"/>
                <input className="form-control mb-5" required ref={priceRef} placeholder="Price"/>
                <button className="btn btn-success mt-3 mb-5" disabled={state.loading} type="submit">
                    Save New Menu Item
                </button>
            </form>
        </div>
    );
}

export default CreateItemForm;