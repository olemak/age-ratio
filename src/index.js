(() => {
    function fn() {
        init();
    }
    if (document.readyState != "loading") {
        fn();
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
})();

function init() {
    const age1_input = window.age1;
    const age2_input = window.age2;

    age1_input.addEventListener("change", inputChange);
    age2_input.addEventListener("change", inputChange);
}

function inputChange(event) {
    calculator[event.target.id] = parseInt(event.target.value);
    window.output.innerHTML = calculator.ratio;
}

const calculator = {
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
