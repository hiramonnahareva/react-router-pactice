import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends , setFriends] = useState ([]) ;
    useEffect (() => {
        fetch ('https://jsonplaceholder.typicode.com/users')
        .then (res => res.json ())
        .then (data => setFriends (data))
    },[])
    return (
        <div>
            <h2>Hello Friends how Are you</h2>
            <h4>friends num: {friends.length} </h4>
            {
                friends.map (friend => <Friend key = {friend.id} friend = {friend}></Friend>)
            }
        </div>
    );
};

export default Friends;