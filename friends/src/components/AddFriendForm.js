import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom"

const initialState = {
    newFriend: {
        name: "",
        age: "",
        email: ""
    } 
}

const AddFriendForm = () => {
    const history = useHistory();
    const [newFriend, setNewFriend] = useState(initialState.newFriend)

    const handleChange = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(newFriend.name === "" || newFriend.age === "" || newFriend.email === "") return;
        axiosWithAuth()
            .post(`/api/friends`, newFriend)
            .then(res => {
                history.push("/friends-list");
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
    <>
    <form onSubmit={handleSubmit}>
        <label>Name:
        <input type="text" name="name" value={newFriend.name} onChange={handleChange}/>
        </label><br />
        <label>Age:
        <input type="number" name="age" value={newFriend.age} onChange={handleChange}/>
        </label><br />
        <label>Email:
        <input type="email" name="email" value={newFriend.email} onChange={handleChange}/>
        </label><br />
        <button onClick={() => history.push("/friends-list")} >Go Back</button>
        <button type="submit">Add Friend</button>
    </form>
    </>
    );
}

export default AddFriendForm;
