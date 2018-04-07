export const calculator = {
    ageOne: 20,
    ageTwo: 30,

    set age1(value) {
        this.ageOne = value;
    },
    set age2(value) {
        this.ageTwo = value;
    },
    get ratio() {
        const ages = [this.ageOne, this.ageTwo].sort();
        const lowestAge = ages[0];
        const highestAge = ages[1];
        const half = highestAge / 2;
        const minimumAge = half + 7;
        return lowestAge >= minimumAge;
    }
};
