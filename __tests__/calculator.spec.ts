import { calculator } from "../src/calculator";

describe("Age Ratio Calculator", () => {
    it("Default ageOne is 25", () => {
        expect(calculator.ageOne).toEqual(25);
    });
    it("Default ageTwo is 30", () => {
        expect(calculator.ageTwo).toEqual(30);
    });

    it("So by default, ratio is 'true'", () => {
        expect(calculator.ratio).toEqual(true);
    });

    it("However, ageOne can be set to 16", () => {
        calculator.age1 = 16;
        expect(calculator.ageOne).toBe(16);
    });

    it("And ageTwo can be set to 42...", () => {
        calculator.age2 = 42;
        expect(calculator.ageTwo).toBe(42);
    });

    it("So ratio should then be 'false'", () => {
        expect(calculator.ratio).toBe(false);
    });
});
