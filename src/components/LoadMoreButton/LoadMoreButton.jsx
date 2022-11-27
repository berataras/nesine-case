import React from 'react';

import "./LoadMoreButton.style.css";

function LoadMoreButton({onClick}) {
    return (
        <button
            className="loadMoreButton"
            onClick={() => onClick()}
        >
            Daha Fazla Yükle
        </button>
    );
}

export default LoadMoreButton;