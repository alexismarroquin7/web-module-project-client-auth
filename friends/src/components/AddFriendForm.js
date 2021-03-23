import React, { useState } from "react";

const initialState = {
    newFriend: {
        name: "",
        age: "",
        email: ""
    } 
}

const AddFriendForm = () => {

    const [newFriend, setNewFriend] = useState(initialState.newFriend)

    const handleChange = e => {
        setNewFriend({
            ...newFriend,
            [e.target.value]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

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
        <button type="submit">Add Friend</button>
    </form>
    </>
    );
}

export default AddFriendForm;
