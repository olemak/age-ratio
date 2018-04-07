export const calculator = {
    ageOne: 20,
    ageTwo: 30,

    set age1(value: number) {
        this.ageOne = value;
    },
    set age2(value: number) {
        this.ageTwo = value;
    },
    get ratio() {
        const ages = [this.ageOne, this.ageTwo].sort();
        const lowestAge: number = ages[0];
        const highestAge: number = ages[1];
        const half: number = highestAge / 2;
        const minimumAge: number = half + 7;
        return lowestAge >= minimumAge;
    }
    //error here
};
