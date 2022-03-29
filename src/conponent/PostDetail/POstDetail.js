import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const POstDetail = () => {
    const {postId} = useParams();
    const [post ,setPost] =useState ({});
    useEffect (()=> {
        fetch (`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then (res => res.json ())
        .then (data => setPost (data))
    }, [postId])
    return (
        <div>
            <h2>this is detai</h2>
            <h4>post id:{postId}</h4>
            <h5>post Title:{post.title}</h5>
            <p>post body: {post.body}</p>
        </div>
    );
};

export default POstDetail;