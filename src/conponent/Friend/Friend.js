import React, { useReducer } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const navigate = useNavigate ()
    const showButton = () => {
        const path = `/friend/${id}` ;
        navigate (path) ;
    }
    const {name , username , id} = props.friend
    return (
        <div>
            <h4>Name: {name}</h4>
            {/* <Link to={`/friend/${id}`}>detail</Link> */}
            <button onClick={showButton}>{username} id:{id}</button>
        </div>
    );
};

export default Friend;