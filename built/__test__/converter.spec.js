"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
let convert;
beforeAll(() => {
    convert = new __1.Converter();
});
describe("convertFromBaseNToDecimal", () => {
    describe("When given a number in a base that is less", () => {
        it("should convert it to decimal", () => {
            expect(convert.convertFromBaseNToDecimal("1101", 2)).toEqual(13);
            expect(convert.convertFromBaseNToDecimal("11011", 2)).toEqual(27);
            expect(convert.convertFromBaseNToDecimal("1210", 3)).toEqual(48);
        });
    });
    describe("When given a number in a base that is grater than 10", () => {
        it("should convert it to decimal", () => {
            expect(convert.convertFromBaseNToDecimal("1A1", 11)).toEqual(232);
            expect(convert.convertFromBaseNToDecimal("1B1", 14)).toEqual(351);
            expect(convert.convertFromBaseNToDecimal("ABC", 16)).toEqual(2748);
        });
    });
});
describe("convertFromDecimalToBaseN", () => {
    describe("When given a number in a base that is less", () => {
        it("should convert it to decimal", () => {
            expect(convert.convertFromDecimalToBaseN(13, 2)).toEqual("1101");
            expect(convert.convertFromDecimalToBaseN(27, 2)).toEqual("11011");
            expect(convert.convertFromDecimalToBaseN(48, 3)).toEqual("1210");
            expect(convert.convertFromDecimalToBaseN(232, 11)).toEqual("1A1");
            expect(convert.convertFromDecimalToBaseN(351, 14)).toEqual("1B1");
            expect(convert.convertFromDecimalToBaseN(2748, 16)).toEqual("ABC");
        });
    });
});
describe("When given an invalid number in base N", () => {
    test("should throw an error indicating that the number is not a string", () => {
        expect(() => convert.convertFromBaseNToDecimal(1011, 2)).toThrowError("Number to convert must be a string");
    });
});
