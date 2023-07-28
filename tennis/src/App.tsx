import React from 'react';
import logo from './logo.svg';
import './App.css';

type Player = {
    score: number
}

export const game = {
    scorePoint: (player: Player) => {
        player.score++;
    },
    getScore: () => {
        return 'love-love';
    }
};

export const players: {player1: Player, player2: Player} = {
    player1: {
        score: 0
    },
    player2: {
        score: 0
    }
};


