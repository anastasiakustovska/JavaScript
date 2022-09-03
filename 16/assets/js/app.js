Vue.use(VueMask.VueMaskPlugin);

new Vue({
    el: '#app',
    data() {
        return {
            isFlipped: false,
            card: {
                number: null,
                holder: null,
                month: null,
                year: null,
                cvv: '',
            }
        };
    },

    methods: {
        flipCard: function (isFlipped = true) {
            this.isFlipped = isFlipped;
        },

        onCvvChange: function (event) {
            event.preventDefault();
            const value = event.target.value;

            if (value >= 0 && value <= 999) {
                this.card.cvv = value;
            }

        }
    },

    computed: {
        cardBackground: function () {
            return Math.floor(Math.random() * 25 + 1);
        },

        cardMask: function () {
            return this.cardType === 'amex' ? "#### ###### #####" : "#### #### #### ####";
        },

        formattedYear: function () {
            return String(this.card.year).substring(2);
        },

        cardType: function () {
            const number = this.card.number;

            if (!number) {
                return "visa";
            }

            let re = new RegExp("^4");

            if (number.match(re) != null) return "visa";

            re = new RegExp("^(34|37)");

            if (number.match(re) != null) return "amex";

            re = new RegExp("^5[1-5]");

            if (number.match(re) != null) return "mastercard";

            re = new RegExp("^6011");
            if (number.match(re) != null) return "discover";

            re = new RegExp('^9792')
            if (number.match(re) != null) return 'troy'

            return "visa"; // default type
        },

        availableYears: function () {
            const currentYear = new Date().getFullYear();
            const YEARS_MAX_SHIFT = 20;
            const availableYears = [];

            for (let i = currentYear; i <= currentYear + YEARS_MAX_SHIFT; i++) {
                availableYears.push(i);
            }

            return availableYears;
        },

        availableMonths: function () {
            const date = new Date();
            const currentYear = date.getFullYear();
            const startMonth = currentYear === Number(this.card.year) ? date.getMonth() : 1;
            const endMonth = 12;
            const allMonths = [];

            for (let i = startMonth; i <= endMonth; i++) {
                allMonths.push(i < 10 ? `0${i}` : i);
            }

            return allMonths;
        }
    }
});


// createApp({
//     data() {
//         return {
//             name: 'Vladik',
//             counter: 0,
//         }
//     },
//
//     computed: {
//         userAge: function () {
//             return JSON.stringify(this);
//         }
//     },
//
//     watch: {
//         counter: function (currentValue) {
//             if (currentValue > 3) {
//                 this.counter = 3;
//             }
//         }
//     },
//
//     methods: {
//         increase: function () {
//             this.counter++;
//         },
//         decrease: function () {
//             this.counter--;
//         }
//     }
// }).mount('#app')
