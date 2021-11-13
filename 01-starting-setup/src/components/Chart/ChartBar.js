import React from 'react';
import './ChartBar.css';

const ChartBar = props => {
    let barFillHeight = '0%';

    if(props.max > 0){
        barFillHeight = Math.round((props.value / props.max) * 100) + '%';
    }

    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill' style={{height : barFillHeight}}></div>    
            </div>
            <div className='chart-bar__label'>{props.label}</div>
        </div>
    );
};

// NOTE: In react, if we want to pass style we need to pass it in the form of an object(not text)

export default ChartBar;