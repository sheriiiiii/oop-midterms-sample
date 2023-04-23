abstract class Restaurant {
    private _name: string;
    private _location: string;
    private _openTime: number;
    private _closeTime: number;
    protected cuisine: string;
    protected menu: string[];
    protected rating: number = 0;

    constructor(name: string, location: string, openTime: number, closeTime: number, cuisine: string, menu: string[], rating: number) {
        this._name = name;
        this._location = location;
        this._openTime = openTime;
        this._closeTime = closeTime;
        this.cuisine = cuisine;
        this.menu = menu;
        this.rating = rating;
    };

    public getRestoName(): string {
        return this._name;
    };

    public hoursOpen(): string {
        return `The ${this._name} is open from ${this._openTime} to ${this._closeTime}.`;
    };

    public getMenuItem(): string[] {
        return this.menu;
    };

    public takeOrder(order: string): void {
        console.log(`We got you order of ${order}. We'll have it ready for you shortly.' `);
    };

    getPayment(amount: number): void  {
        console.log(`Payment of ${amount} received. Thank you for dining at ${this._name}. Please come again!`);
    };

    getFeedback(feedback: string): void {
        if (this.rating  <= 5 && feedback === "") {
            console.log(`We've received ${this.rating} stars: ${feedback}. Your honest review will greatly help us improve our services. Thank you and have a great day.`);
        } else {
            console.log(`We've received ${this.rating} stars: ${feedback}. Your honest review will greatly help us improve our services. Thank you and have a great day.`);
        };
    };
}

    class Cafe extends Restaurant {
        private _franchise: string
        private _shareholderStocks: string
        private _marketing: string;

        constructor(name: string, location: string, openTime: number, closeTime: number, cuisine: string, menu: string[], rating: number, franchise: string, shareholderStocks: string, marketing: string) {
        super(name, location, openTime, closeTime, cuisine, menu, rating, franchise, shareholderStocks, marketing);
        this._franchise = franchise;
        this._shareholderStocks = shareholderStocks;
        this._marketing = marketing;
    };

    public sellStocks(): {

    };

    public buyStocks(): {

    };

    public expandFranchise(): {

    };

    public audienceReached(): {

    };
    };


