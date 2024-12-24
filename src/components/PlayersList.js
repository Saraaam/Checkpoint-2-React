import React from 'react';
import Player from './Player';
import players from '../data/players';
const PlayersList = () => {
    const listStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        margin: '20px',
    };

    return (
        <div style={listStyle}>
            {players.map((player, index) => (
                <Player key={index} {...player} />
            ))}
        </div>
    );
};

export default PlayersList;
