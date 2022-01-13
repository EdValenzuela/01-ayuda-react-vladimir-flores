import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = () => {
    return (
        <div className="progressBar">
            <CircularProgress size={100}></CircularProgress>
        </div>
    );
};

export default Loading;
