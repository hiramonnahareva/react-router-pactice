import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId} = useParams () ;
    const [friend , setFriend] = useState ({}) ;
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}` ;
    useEffect (()=> { 
        fetch (url) 
        .then (res => res.json ())
        .then (data => setFriend (data)) ;
    } , []) ;
 
    return (
        <div>
            <h2>Friend Details</h2>
            <h2>{friendId}</h2>
            <h3>Name : {friend.name}</h3>
            <h3>Email : {friend.email}</h3>
            <h3>WEbsite : {friend.website}</h3>
            <h4>city : {friend.address?.city}</h4>
            <h5>lat : {friend.geo?.lat}</h5>
            {/* <h3>friend : {friend.name}</h3> */}
        </div>
    );
};

export default FriendDetail;