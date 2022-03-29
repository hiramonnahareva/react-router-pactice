import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div style={{display: 'flex'}}>
              <h2>Welcome To Our Website</h2>
            <nav style={{display: 'flex'}}>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/friends">Friends</CustomLink>
                <CustomLink to="/posts">Posts</CustomLink>
                <CustomLink to="/about">About</CustomLink>
        </nav>
        </div>
    );
};

export default Header;