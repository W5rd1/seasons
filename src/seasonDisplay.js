import React from 'react';

const GetSeason = (lat, month) => {
    if (month > 2 && month <9) {
        return lat > 0 ? 'Summer' : 'Winter';
    } else {
        return lat > 0 ? 'Winter' : 'Summer';
    }
};

const SeasonDisplay = props => {
    const season = GetSeason(props.lat, new Date().getMonth());
    const text = season === 'Winter' ? "Burrr it's cold" : "It's summer, let's hit the beach"
    const icon = season  === 'Winter' ? 'snowflake' : 'sun';
    return(
        <div>
            <i className={`${icon} icon`} />
            <h1>{text}</h1>
            <i className={`${icon} icon`} />
        </div>
    )
};
export default SeasonDisplay;