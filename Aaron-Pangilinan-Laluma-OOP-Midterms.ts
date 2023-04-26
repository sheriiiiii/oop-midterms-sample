interface Business {
    getRestoName(): string;//
    getRestoInfo(email: string): void;
    getMenuItem(): void;
    takeOrder(order: string): void;
    getPayment(): void;
    getPaymentMethod(): void;//
    getAvailableTables(): void;//
    hoursOpen(): void;
    getRatings(): void;
    getFeedback(): void;
}

    abstract class Restaurant implements Business {
        protected _name: string;
        protected _location: string;
        protected _cuisine: string;
        protected _menu: string[];
        protected _orderList: string[];
        protected _paymentMethod: string;
        protected _availableTables: number;
        protected _openTime: string;
        protected _closeTime: string;
        protected _rating: number;
        

        constructor(name: string, location: string, cuisine: string, menu: string[], orderList: string[],
            paymentMethod: string, availableTables: number, openTime: string, closeTime: string, rating: number) {
            this._name = name;
            this._location = location;
            this._cuisine = cuisine;
            this._menu = menu;
            this._orderList = orderList;
            this._paymentMethod = paymentMethod;
            this._availableTables = availableTables;
            this._openTime = openTime;
            this._closeTime = closeTime;
            this._rating = rating;
        };

        public getRestoName(): string {
            return this._name;
        };

        public getRestoInfo(email: string): void {
            console.log(`Hi there! This is ${this._name}. We are located at ${this._location}. If you have any concerns, please contact us on our email: ${email}`)
        }

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

        public getAvailableTables(): void {
            console.log(`There are ${this._availableTables} tables available.`)
        }

        public getRatings(): void {
            if (this._rating = 5) {
                console.log(`Thank you for rating us ${this._rating} stars!`);
            } else if (this._rating >= 3) {
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
        private _deliveryRider: string;
        private _orderID: string;
        private _queNumber: string;

        constructor(name: string, location: string, cuisine: string, menu: string[], orderList: string[],
            paymentMethod: string, availableTables: number, openTime: string, closeTime: string, rating: number, 
            deliveryRider: string, orderID: string, queNumber: string) {
        super(name, location, cuisine, menu, orderList, paymentMethod, availableTables, openTime, closeTime, rating) 
            
            this._deliveryRider = deliveryRider;
            this._orderID = orderID;
            this._queNumber = queNumber;
        };

        public getRestoName(): string {
            return this._name;
        };

        public getMenuItem(): void {
            console.log(`Welcome to ${this._name}! Here are is the menu: ${this._menu}.`);
        };

        public takeOrder(order: string): void {
            if (this._menu.includes(order)) {
                this._orderList.push(order);
                console.log(`We got you order of ${this._orderList}. We'll have it ready for you shortly.`);
            } else {
                console.log(`Sorry your order of ${order} is not available.`);
            };
        };

        public addItemToMenu (item: string): void {
            this._orderList.push(item);
            console.log(`You added ${item} to menu.`)
        }

        public getCustomerInfo(customerName: string, customerLocation: string): void {
            console.log(`Hi ${customerName}! Your order is on the way to ${customerLocation}.`)
        }

        public deliveryService(): void {
            console.log(`Hello there! Your order will be delivered by ${this._deliveryRider}.`)
        }

        public getOrderID(): void {
            console.log(`Your order ID is ${this._orderID}.`)
        }

        public driveThru(): void {
            console.log(`Please wait in line. Your que number is ${this._queNumber}`)
        }
    }

    class FineDining extends Restaurant {

        constructor(name: string, location: string, cuisine: string, menu: string[], orderList: string[],
            paymentMethod: string, availableTables: number, openTime: string, closeTime: string, rating: number, 
            ) {
        super(name, location, cuisine, menu, orderList, paymentMethod, availableTables, openTime, closeTime, rating) 
            
            
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

            console.log(`${this._name} is open for ${time} hours. Enjoy your fine dining experience!`);
        };

        public makeReservation(): void {
            if (this._availableTables == this._availableTables) {
                console.log(`You can't make a reservation now.`)
            } else {
                console.log(`Reservation is set. Enjoy!`)
            }
        }

        public prepareMeal(meal: string): void {
            console.log(`${meal} will be prepared in a short while.`)
        }
        
        public serveMeal(customerName: string, meal: string): void {
            if (this._menu.includes(meal)) {
                console.log(`Serving ${customerName} a ${meal}.`)
            } else {
                console.log(`Dish not available on menu.`)
            }
        }

        public getMealInfo(executiveChef: string): void {
            console.log(`Welcome to ${this._name}! For today's menu we will offer you ${this._cuisine} cuisine headed by the head chef ${executiveChef}`)
        }

        public wineOption(wine: string): void {
            if (wine == 'Red Wine' || wine == 'White Wine' || wine == 'Rose Wine') {
                console.log('Your ${wine} will pe prepared.')
            } else {
                console.log('Your choice is not available.')
            }
        }
    }

const mcdo: FastFood = new FastFood("McDonald's", "Ungka, Pavia", "N/A", 
["Burger", "Fries", "Chicken", "Sundae", "Soda"], [], "cash", 15, "9:00", "21:00", 3, "Juan dela Cruz", "ID306", "15"   )

mcdo.addItemToMenu("Spaghetti");
mcdo.takeOrder("Burger");
mcdo.getCustomerInfo("Valerie Aaron", "Jaro");
mcdo.getAvailableTables();

const sheries: FineDining = new FineDining("Sherie's", "N/A", "French", 
["Boeuf Bourguignon", "Moules Marinières", "Blanquette de Veau", "Soupe à L’oignon"], 
[],"credit card", 10, "18:00", "22:00", 5);

sheries.hoursOpen();
sheries.getPaymentMethod();
sheries.getMealInfo("Chef Paul Bocuse");
sheries.makeReservation();
sheries.serveMeal("Valerie Aaron", "Boeuf Bourguignon");
sheries.serveMeal("Valerie Aaron", "Chicken Biryani");

