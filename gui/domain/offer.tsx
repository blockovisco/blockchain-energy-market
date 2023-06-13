export class Offer {

    constructor(id: string, name: string, price: number, amount: number, offerer: string) {
        this.ID = id;
        this.Name = name;
        this.Price = price;
        this.Amount = amount;
        this.Offerer = offerer
    }
    
    public Amount: number;
    public ID: string;
    public Name: string;
    public Offerer: string;
    public Price: number;
}