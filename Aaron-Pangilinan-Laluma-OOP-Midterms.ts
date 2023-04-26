interface Business {
    getRestoName(): string;
    getMenuItem(): void;
    takeOrder(order: string): void;
    getPayment(): void;
    getPaymentMethod(): void;
    hoursOpen(): void;
    getRatings(): void;
    getFeedback(): void;
}

    abstract class Restaurant implements Business {
        protected _name: string;
        protected _location: string;
        protected _cuisine: string;
        protected _menu: string[];
        protected _paymentMethod: string;
        protected _openTime: string;
        protected _closeTime: string;
        protected _rating: number;
        //protected _email: void;


        constructor(name: string, location: string, cuisine: string, menu: string[], 
            paymentMethod: string, openTime: string, closeTime: string, rating: number, ) {
            this._name = name;
            this._location = location;
            this._cuisine = cuisine;
            this._menu = menu;
            this._paymentMethod = paymentMethod;
            this._openTime = openTime;
            this._closeTime = closeTime;
            this._rating = rating;
        };

        public getRestoName(): string {
            return this._name;
        };

        public getMenuItem(): void {
            console.log(`Welcome! Today's menu features ${this._cuisine}, including ${this._menu}`);
        };

        public takeOrder(order: string): void {
            if (this._menu.includes(order)) {
                console.log(`We got you order of ${order}. We'll have it ready for you shortly.`);
            } else {
                console.log(`Sorry your order of ${order} is not available.`);
            };
        };

        public getPayment(): void {
            console.log(`Please pay at the cashier. Thank you.`);
        };

        public getPaymentMethod(): void {
            if (this._paymentMethod === 'credit card' || this._paymentMethod === 'online payment' || this._paymentMethod === 'cash') {
                console.log(`Payment through ${this._paymentMethod} is successful. Thank you for dining with us!`)
            } else {
                console.log (`Mode of payment is not accepted. Please try again.`)
            }
        }

        public hoursOpen(): void {
            let openHour = parseInt(this._openTime.split(':')[0]);
            let closeHour = parseInt(this._closeTime.split(':')[0]);
            let time: number;

            if (openHour <= closeHour) {
                time = closeHour - openHour;
              } else {
                time = 24 - openHour + closeHour;
              };

            console.log(`${this._name} is open for ${time} hours. Enjoy!`);
        };

        public getRatings(): void {
            if (this._rating === 5 || this._rating === 4) {
                console.log(`Thank you for rating us ${this._rating} stars!`);
            } else if (this._rating === 3) {
                console.log(`Thank you for rating us ${this._rating} stars! We will improve our service for your best experience.`)
            } else if (this._rating < 3) {
                console.log(`We are sorry that we didn't meet your expectations. Thank you for your review.`)
            }
        }

        public getFeedback(): void {
            console.log(`Please provide some feedback. We would greatly appreciate your feedback as it would assist us in enhancing our 
            services to better meet your requirements. Thank you`);
        };
    };

    class FastFood extends Restaurant {
        private _customerLocation: string;
        private _deliveryRider: string;



        constructor(name: string, cuisine: string, menu: string[], 
            paymentMethod: string, openTime: string, closeTime: string, rating: number, 
            location: string, customerLocation: string, deliveryRider: string) {
        super(name, location, cuisine, menu, paymentMethod, openTime, closeTime, rating) 
            this._customerLocation = customerLocation;
            this._deliveryRider = deliveryRider;
        };

        public getRestoName(): string {
            return this._name;
        };

        public getMenuItem(): void {
            console.log(`Welcome! Today's menu features ${this._cuisine}, including ${this._menu}`);
        };

        public takeOrder(order: string): void {
            if (this._menu.includes(order)) {
                console.log(`We got you order of ${order}. We'll have it ready for you shortly.`);
            } else {
                console.log(`Sorry your order of ${order} is not available.`);
            };
        };

        public getPayment(): void {
            console.log(`Please pay at the cashier. Thank you.`);
        };

        public deliveryService(): void {
            console.log(`Delivery is on the way by rider ${this._deliveryRider}`)
        }

    }
