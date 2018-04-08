export const calculator = {
    ageOne: 25,
    ageTwo: 30,

    set age1(value: number) {
        this.ageOne = value;
    },
    set age2(value: number) {
        this.ageTwo = value;
    },
    get ratio() {
        return this.calculateRatio(this.ageOne, this.ageTwo);
    },
    get wait() {
        let waitingTime: number = 0;
        let totallyFine: boolean = false;
        while (!totallyFine) {
            totallyFine = this.calculateRatio(
                this.ageOne + waitingTime,
                this.ageTwo + waitingTime++
            );
        }
        return waitingTime - 1;
    },
    calculateRatio(ageOne, ageTwo) {
        const ages = [ageOne, ageTwo].sort();
        const lowestAge: number = ages[0];
        const highestAge: number = ages[1];
        const half: number = highestAge / 2;
        const minimumAge: number = half + 7;
        return lowestAge >= minimumAge;
    }
};
