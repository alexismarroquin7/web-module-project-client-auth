import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";


const Friend = () => {
    const { id } = useParams();
    const { push } = useHistory();
    const [friend, setFriend] = useState({});

    useEffect(() => {
        axiosWithAuth()
            .get(`/api/friends/${id}`)
            .then(res => {
                setFriend(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
    <>
    <div className="Friend-Container">
    {friend &&  (
            <div className="Friend">
            <h4>{friend.name}</h4>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
            <button onClick={() => push("/friends-list")}>Go Back</button>
            </div>
        )}
    </div>
    </>
    );
}
 
export default Friend;