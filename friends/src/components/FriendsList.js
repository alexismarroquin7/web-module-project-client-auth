import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";


const initialState = {
    friends: []
}

const FriendsList = () => {

    const [friends, setFriends] = useState(initialState.friends);

    useEffect(() => {
        axiosWithAuth()
            .get("/api/friends")
            .then(res => {
                setFriends(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    if (friends.length === 0)
        return <h3>Loading Friends...</h3>

    return (
    <>
    <div>
        <h2>Friends List</h2>
        <Link to="/new-friend">Add New Friend</Link>
        {friends.length !== 0 
        ? friends.map(friend => <Link to={`/friends-list/${friend.id}`}><h3>{friend.name}</h3></Link>
        ) : (
            <h3>Loading Friends...</h3>
        )}
    </div>
    </>
    );
}

export default FriendsList;