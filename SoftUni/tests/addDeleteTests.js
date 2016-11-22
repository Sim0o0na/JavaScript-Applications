let list = require("../addDelete").list;
let expect = require("chai").expect;

describe("Testing", function () {
    it("Test", function() {
        list.add(3);
        let deleted = list.delete(0);
        expect(deleted).to.be.equal(3);
    });
    it("Test", function() {
        list.add(5);
        list.add(66);
        expect(list.toString()).to.be.equal('5, 66');
    });
});