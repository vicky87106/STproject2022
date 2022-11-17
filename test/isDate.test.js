import chai from "chai"
import isDate from "../src/isDAte.js"

const expect = chai.expect

describe("Is object a Date?", () => {

    it("object is Date", () => {
        expect(isDate(new Date)).to.equal(true);
    });
    
    it("object is a Date string", () => {
        expect(isDate('Mon April 23 2012')).to.equal(false);
    });
})