import React from 'react';
import * as App from './App';

test('Game object exists', () => {
    expect(App.game).toBeDefined();
});

test('Players object exists', () => {
    expect(App.players).toBeDefined();
});


test('Players object has 2 players', () => {
    expect(App.players).toHaveProperty('player1');
    expect(App.players).toHaveProperty('player2');
});

test('Players start with score 0', () => {
    expect(App.players.player1).toHaveProperty('score', 0);
    expect(App.players.player2).toHaveProperty('score', 0);
});

test('Game prints score as love-love', () => {
    expect(App.game.getScore()).toBe('love-love');
})

test('Player 1 scores a point', () => {
    App.game.scorePoint(App.players.player1);
    expect(App.players.player1).toHaveProperty('score', 1);
})

test('Player 2 scores two point', () => {
    App.game.scorePoint(App.players.player2);
    App.game.scorePoint(App.players.player2);
    expect(App.players.player2).toHaveProperty('score', 2);
})

test('Game prints score as 15-30', () => {
    expect(App.game.getScore()).toBe('15-30');
})

test('Game prints score as deuce', () => {
  App.game.scorePoint(App.players.player1);
  App.game.scorePoint(App.players.player1);
  App.game.scorePoint(App.players.player2);
  expect(App.game.getScore()).toBe('deuce');
})

test('Game prints score as advantage', () => {
  App.game.scorePoint(App.players.player1);
  expect(App.game.getScore()).toBe('player1 advantage');
})

test('Game prints score as deuce after advantage lost', () => {
  App.game.scorePoint(App.players.player2);
  expect(App.game.getScore()).toBe('deuce');
})