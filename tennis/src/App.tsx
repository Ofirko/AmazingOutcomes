import React from 'react';
import logo from './logo.svg';
import './App.css';

type Player = {
    score: number
}
const scoreNames = ['love', 15, 30, 40]
export const game = {
    scorePoint: (player: Player) => {
        player.score++;
    },
    getScore: (): string => {
      if (players.player1.score == 3 && players.player2.score == 3) {
        return 'deuce';
      }

      if (players.player1.score == 4 && players.player2.score == 3) {
        return 'player1 advantage';
      }
      
      if (players.player1.score == 4 && players.player2.score == 4) {
        players.player1.score --;
        players.player2.score --;
        return game.getScore();
        
      }

        return scoreNames[players.player1.score] + '-' + scoreNames[players.player2.score];
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


