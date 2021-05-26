const { it } = require('@jest/globals');
var AList = require('./AList');

var testAList = new AList();

describe("AList create", function(){
    it('should be defined', function(){
        expect(testAList).toBeDefined();
    } );
});