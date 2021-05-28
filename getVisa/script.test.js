// import startRace from './startRace';
const startRace = require('./startRace');

describe('startRace', function() {
    it('startRace should be defined', function() {
        expect(startRace).toBeDefined()
    })
    it('startRace should be function', function() {
        expect(typeof startRace).toBe('function');
    })
})