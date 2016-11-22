let createList = require('../swapLeft').createList;
let expect = require('chai').expect;

describe('Testing createList', function() {
    let listCreator;
    beforeEach(function () {
        listCreator = createList();
    });
    it('should have add, subtract, get functions', () => {
        expect(listCreator.hasOwnProperty('add')).to.be.true;
        expect(listCreator.hasOwnProperty('shiftLeft')).to.be.true;
        expect(listCreator.hasOwnProperty('shiftRight')).to.be.true;
        expect(listCreator.hasOwnProperty('swap')).to.be.true;
    });
    it('should be object, instance of listCreator', () => {
        expect(listCreator).to.be.an('object');
    });
    it('ADD: Should return 5 for add(5)', function () {
        listCreator.add(5);
        let value = listCreator.toString();
        expect(value).to.be.equal('5');
    });
    it('ADD: Should return 5, 1', function () {
        listCreator.add(5); listCreator.add(1);
        let value = listCreator.toString();
        expect(value).to.be.equal('5, 1');
    });
    it('ADD: Should return 5,1', function () {
        listCreator.add([5, 1]);
        let value = listCreator.toString();
        expect(value).to.be.equal('5,1');
    });
    it('ADD: Should return Simona, Hristova', function () {
        listCreator.add('Simona'); listCreator.add('Hristova');
        let value = listCreator.toString();
        expect(value).to.be.equal('Simona, Hristova');
    });

    it('SHIFT LEFT: Should return 1, 5 ', function(){
        listCreator.add(5); listCreator.add(1);
        listCreator.shiftLeft();
        let value = listCreator.toString();
        expect(value).to.be.equal('1, 5');
    });
    it('SHIFT LEFT: Should return Hristova, Simona', function () {
        listCreator.add('Simona'); listCreator.add('Hristova');
        listCreator.shiftLeft();
        let value = listCreator.toString();
        expect(value).to.be.equal('Hristova, Simona');
    });
    it('SHIFT LEFT: Should return empty ', function () {
        let value = listCreator.toString();
        listCreator.shiftLeft();
        expect(value).to.be.equal('');
    });

    it('SHIFT RIGHT: Should return empty ', function () {
        let value = listCreator.toString();
        listCreator.shiftRight();
        expect(value).to.be.equal('');
    });
    it('SHIFT RIGHT: Should return 1,5 ', function () {
        listCreator.add(5); listCreator.add(1);
        listCreator.shiftRight();
        let value = listCreator.toString();
        expect(value).to.be.equal('1, 5');
    });
    it('SHIFT RIGHT: Should return Hristova, Simona ', function () {
        listCreator.add('Simona'); listCreator.add('Hristova');
        listCreator.shiftRight();
        let value = listCreator.toString();
        expect(value).to.be.equal('Hristova, Simona');
    });
    it('SHIFT RIGHT: Should return Hristova, Simona, Simeonova ', function () {
        listCreator.add('Simeonova'); listCreator.add('Simona'); listCreator.add('Hristova');
        listCreator.shiftRight();
        let value = listCreator.toString();
        expect(value).to.be.equal('Hristova, Simeonova, Simona');
    });

    it('SWAP: Should return Hristova, Simona, Simeonova ', function () {
        listCreator.add('Simeonova'); listCreator.add('Simona'); listCreator.add('Hristova');
        listCreator.swap(0,2);
        let value = listCreator.toString();
        expect(value).to.be.equal('Hristova, Simona, Simeonova');
    });
    it('SWAP: Should return false for float', function () {
        listCreator.add('Simeonova'); listCreator.add('Simona'); listCreator.add('Hristova');
        expect(listCreator.swap(0,3.14)).to.be.equal(false);
    });
    it('SWAP: Should return false for big', function () {
        listCreator.add('Simeonova'); listCreator.add('Simona'); listCreator.add('Hristova');
        expect(listCreator.swap(0,5)).to.be.equal(false);
    });
    it('SWAP: Should return false for negative', function () {
        listCreator.add('Simeonova'); listCreator.add('Simona'); listCreator.add('Hristova');
        expect(listCreator.swap(0,-5)).to.be.equal(false);
    });
    it('SWAP: Should return false for equal', function () {
        listCreator.add('Simeonova'); listCreator.add('Simona'); listCreator.add('Hristova');
        expect(listCreator.swap(0,0)).to.be.equal(false);
    });
    it('SWAP: Should return true for valid', function () {
        listCreator.add('Simeonova'); listCreator.add('Simona'); listCreator.add('Hristova');
        expect(listCreator.swap(0,1)).to.be.equal(true);
    });

    it('TOSTRING: Should return correct', function () {
        listCreator.add('Simeonova'); listCreator.add('Simona'); listCreator.add('Hristova');
        expect(listCreator.toString()).to.be.equal('Simeonova, Simona, Hristova');
    });
});