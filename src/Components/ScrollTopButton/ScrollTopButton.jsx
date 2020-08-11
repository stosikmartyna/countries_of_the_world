import React from 'react';
import './ScrollTopButton.css';

export const ScrollTopButton = ({ scrollTop, showScroll }) => {
    return (
        <button className="scrollTop" onClick={scrollTop} style={{ display: showScroll ? 'flex' : 'none' }}>
            <img src="scrollTopButton.png" />
        </button>
    )
}