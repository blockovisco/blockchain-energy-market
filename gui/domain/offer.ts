export class Offer {

    constructor(id: string, name: string, price: number, amount: number, offerer: string, effectiveDate: string) {
        this.ID = id;
        this.Name = name;
        this.Price = price;
        this.amount = amount;
        this.Offerer = offerer
        this.effectiveDate = effectiveDate;
    }
    
    public amount: number;
    public effectiveDate: string;
    public ID: string;
    public Name: string;
    public Offerer: string;
    public Price: number;
}