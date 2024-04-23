import React from 'react';
import {CircularProgress, CircularProgressProps} from "@mui/material";

/* Just a beautiful circular progress :) */
const GradientProgress = (props: CircularProgressProps) => {
    return (
        <>
            <svg width={0} height={0}>
                <defs>
                    <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#fc210d" />
                        <stop offset="100%" stopColor="#f7ce38" />
                    </linearGradient>
                </defs>
            </svg>
            <CircularProgress {...props} sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} />
        </>
    );
};

export default GradientProgress;