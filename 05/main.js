//1

let car = {
    manufacturer: 'Audi', model: 'A6', year: 1994, averageSpeed: 100, tankVolume: 80, consumption: 12, driver: 'Jane',

    getInfo() {
        for (let key in this) {
            let value = this[key];

            if (typeof value === 'function') {
                continue;
            }

            console.log(key, ':', value);
        }
    },

    setDriver(name) {
        this.driver = String(name);
    },

    checkDriver(name) {
        return this.driver === name;
    },

    calculateTimeAndFuel(distance) {
        let time = this.calculateTimeForDistance(distance);
        let totalBreaks = Math.floor(time / 4);

        return {
            fullDistanceTime: time + totalBreaks, fuelForDistance: this.calculateFuelForDistance(distance)
        }
    },

    calculateTimeForDistance(distance) {
        return distance / this.averageSpeed;
    },

    calculateFuelForDistance(distance) {
        let fuelPerKm = this.consumption / 100;

        return distance * fuelPerKm;

    }

};

car.getInfo();
car.setDriver('Tom');
car.getInfo();

let possibleName = prompt('Імʼя водія');
console.log(car.checkDriver(possibleName));

let distance = prompt('Яка відстань?');

console.log(car.calculateTimeAndFuel(distance));


//2

const HOURS_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;
const SECONDS_PER_MINUTE = 60;


let clock = {
    hours: 0, minutes: 0, seconds: 0,

    formatNumber(number) {
        return number > 9 ? number : `0${number}`;
    },

    showTime() {
        return `${this.formatNumber(this.hours)}:${this.formatNumber(this.minutes)}:${this.formatNumber(this.seconds)}`;
    },

    addSeconds(seconds) {
        let newSeconds = this.seconds + seconds;

        if (newSeconds >= SECONDS_PER_MINUTE) {
            let totalMinutes = Math.floor(newSeconds / SECONDS_PER_MINUTE);


            newSeconds = newSeconds - SECONDS_PER_MINUTE * totalMinutes;
            this.addMinutes(totalMinutes);
        }

        this.seconds = newSeconds;
    },

    addMinutes(minutes) {
        let newMinutes = this.minutes + minutes;

        if (newMinutes >= MINUTES_PER_HOUR) {
            let totalHours = Math.floor(newMinutes / MINUTES_PER_HOUR);

            newMinutes = newMinutes - MINUTES_PER_HOUR * totalHours;

            this.addHours(totalHours);
        }

        this.minutes = newMinutes;
    },

    addHours(hours) {
        let newHours = this.hours + hours;

        if (newHours > HOURS_PER_DAY) {
            let totalHours = Math.floor(newHours / HOURS_PER_DAY);

            newHours = newHours - HOURS_PER_DAY * totalHours;
        }

        this.hours = newHours;
    }
}


clock.addMinutes(125);
clock.addSeconds(90);

console.log(clock.showTime());

//3

let fractionOne = {
    numerator: 1, fraction: 2,
};

let fractionTwo = {
    numerator: 1, fraction: 4,
};

let fractionCalculator = {
    add(fraction1, fraction2) {
        return this.simplify({
            numerator: (fraction1.numerator * fraction2.fraction) + (fraction2.numerator * fraction1.fraction),
            fraction: fraction1.fraction * fraction2.fraction
        });
    },

    subtract(fraction1, fraction2) {
        return this.simplify({
            numerator: (fraction1.numerator * fraction2.fraction) - (fraction2.numerator * fraction1.fraction),
            fraction: fraction1.fraction * fraction2.fraction
        });
    },

    multiply(fraction1, fraction2) {
        return {
            numerator: fraction1.numerator * fraction2.numerator, fraction: fraction1.fraction * fraction2.fraction
        };
    },

    divide(fraction1, fraction2) {
        return this.simplify({
            numerator: fraction1.numerator * fraction2.fraction, fraction: fraction1.fraction * fraction2.numerator
        });
    },

    simplify(fraction) {
        let value = 0;

        for (let j = fraction.numerator; j <= fraction.fraction; j++) {
            if (fraction.numerator % j === 0 && fraction.fraction % j === 0) {
                value = j;
            }
        }

        return value === 0 ? fraction : {numerator: fraction.numerator / value, fraction: fraction.fraction / value};
    }
}

console.log(fractionCalculator.add(fractionOne, fractionTwo));
console.log(fractionCalculator.subtract(fractionOne, fractionTwo));
console.log(fractionCalculator.multiply(fractionOne, fractionTwo));
console.log(fractionCalculator.divide(fractionOne, fractionTwo));
console.log(fractionCalculator.simplify({numerator: 5, fraction: 10}));


