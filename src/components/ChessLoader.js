import React from 'react';
import '../styles/ChessLoader.css';

const ChessLoader = () => {
    return (
        // <div className="loader">
        //     <div className="cell d-0"></div>
        //     <div className="cell d-1"></div>
        //     <div className="cell d-2"></div>

        //     <div className="cell d-1"></div>
        //     <div className="cell d-2"></div>
            
            
        //     <div className="cell d-2"></div>
        //     <div className="cell d-3"></div>
            
            
        //     <div className="cell d-3"></div>
        //     <div className="cell d-4"></div>
        // </div>
        <div class="center-screen">
            <div class="loader">  
            <div class="mosaic-loader">
                <div class="cell d-0"></div>
                <div class="cell d-1"></div>
                <div class="cell d-2"></div>
                <div class="cell d-3"></div>
                <div class="cell d-1"></div>
                <div class="cell d-2"></div>
                <div class="cell d-3"></div>
                <div class="cell d-4"></div>
                <div class="cell d-2"></div>
                <div class="cell d-3"></div>
                <div class="cell d-4"></div>
                <div class="cell d-5"></div>
                <div class="cell d-3"></div>
                <div class="cell d-4"></div>
                <div class="cell d-5"></div>
                <div class="cell d-6"></div>
            </div>
            </div>
        </div>
    )
}

export default ChessLoader;