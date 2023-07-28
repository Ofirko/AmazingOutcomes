import React from 'react';
import { render, screen } from '@testing-library/react';
import * as App from './App';

test('Game object exists', ()=> {
  expect(App.game).toBeDefined();
});

test('Players object exists', ()=> {
  expect(App.players).toBeDefined();
});


test('Players object has 2 players', ()=> {
  expect(App.players).toHaveProperty();
});