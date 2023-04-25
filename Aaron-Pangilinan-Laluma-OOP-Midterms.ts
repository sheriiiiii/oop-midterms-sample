abstract class Restaurant {
    private _name: string;
    private _location: string;
    private _openTime: number;
    private _closeTime: number;
    protected cuisine: string;
    protected menu: string;
    protected rating: number;
    private _franchise: boolean;
    private _shareholderStocks: void;
    private _marketing: void;

    constructor(name: string, location: string, openTime: number, closeTime: number, cuisine: string, menu: string, rating: number, franchise: boolean, shareholderStocks: void, marketing: void) {
        this._name = name;
        this._location = location;
        this._openTime = openTime;
        this._closeTime = closeTime;
        this.cuisine = cuisine;
        this.menu = menu;
        this.rating = rating;
        this._franchise = franchise;
        this._shareholderStocks = shareholderStocks;
        this._marketing = marketing;
    };

    private getRestoName(): string {
        
    };

    private hoursOpen(): void {
        
    };

    public getMenuItem(): void {

    };

    public takeOrder(): void {

    };

    public getPayment(): void {

    };

    public getFeedback(): void {

    };

    public sellStock(): void {

    };

    public buyStocks(): void {

    };

    public expandFranchise(): void {

    };

    public audienceReached(): void {

    };
};
