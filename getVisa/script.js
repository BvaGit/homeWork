// 'use strict';
import generateQuote from './generateQuote';
import generateData from './generateData';
import addCandidate from './addCandidate';
import initRace from './initRace';
import startRace from './startRace';

const storage = {
    participants: []
};

window.addEventListener('DOMContentLoaded', () => {
    generateQuote();
    generateData();
    addCandidate(storage.participants);
    initRace();
    startRace(storage.participants);
})