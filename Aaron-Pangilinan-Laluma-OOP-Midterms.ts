interface Business {
    getRestoName(): String;
    getMenuItem(): void;
    takeOrder(order: string): void;
    getPayment(): void;
    getFeedback(): void;
}

    abstract class Restaurant implements Business {
        protected _name: string;
        protected _cuisine: string;
        protected _menu: string[];
        private _rating: void;

        constructor(name: string, cuisine: string, menu: string[], rating: void) {
            this._name = name;
            this._cuisine = cuisine;
            this._menu = menu;
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

        public getFeedback(): void {
            console.log(`Please provide some feedback. We would greatly appreciate your feedback as it would assist us in enhancing our 
            services to better meet your requirements. Thank you`);
        };
    };

    class fastFood extends Restaurant {
        private _location: string;
        private _openTime: string;
        private _closeTime: string;
        private _franchise: boolean;
        private _shareholderStocks: void;
        private _marketing: void;

        constructor(name: string, cuisine: string, menu: string[], rating: void, 
            location: string, openTime: string, closeTime: string, franchise: boolean, shareholderStocks: void, marketing: void) {
        super(name, cuisine, menu, rating) 
            this._location = location;
            this._openTime = openTime;
            this._closeTime = closeTime;
            this._franchise = franchise;
            this._shareholderStocks = shareholderStocks;
            this._marketing = marketing;
        };

        public getRestoName(): string {
            return this._name;
        };

        public hoursOpen(): void {
            let openHour = parseInt(this._openTime.split(':')[0]);
            let closeHour = parseInt(this._closeTime.split(':')[0]);
            let time: number;

            if (openHour <= closeHour) {
                time = closeHour - openHour;
              } else {
                time = 24 - openHour + closeHour;
              };

            console.log(`${this._name} is open for ${time}. Enjoy!`);
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

        public getFeedback(): void {
            console.log(`Please provide some feedback. We would greatly appreciate your feedback as it would assist us in enhancing our 
            services to better meet your requirements. Thank you`);
        };

        
    };
