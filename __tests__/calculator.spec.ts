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

    it("And ageTwo can be set to 42.", () => {
        calculator.age2 = 42;
        expect(calculator.ageTwo).toBe(42);
    });

    it("Ratio should then be 'false'.", () => {
        expect(calculator.ratio).toBe(false);
    });
});

function ageCompare(ageOne: number, ageTwo: number, wait: number) {
    for (let i = 0; i <= wait; i++) {
        it(`${ageOne + i} and ${ageTwo + i} is ${
            i < wait ? "CREEPY  " : "OK      "
        } (${ageTwo + i}/2+7 = ${(ageTwo + i) / 2 + 7})`, () => {
            calculator.age1 = ageOne + i;
            calculator.age2 = ageTwo + i;
            expect(calculator.ratio).toBe(!(i < wait));
        });
    }
}

describe("True love is patient", () => {
    ageCompare(16, 20, 2);

    it("If ages are 16 and 20, waiting time is 2 years", () => {
        calculator.age1 = 16;
        calculator.age2 = 20;
        expect(calculator.wait).toEqual(2);
    });
    ageCompare(20, 30, 4);

    it("If ages are 20 and 30, waiting time is 4 years", () => {
        calculator.age1 = 20;
        calculator.age2 = 30;
        expect(calculator.wait).toEqual(4);
    });
});
