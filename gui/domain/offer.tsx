export class Offer {

    constructor(id: string, name: string, price: number, maxAmount: number, offerer: string, effectiveDate: string) {
        this.ID = id;
        this.Name = name;
        this.Price = price;
        this.maxAmount = maxAmount;
        this.Offerer = offerer
        this.effectiveDate = effectiveDate;
    }
    
    public maxAmount: number;
    public effectiveDate: string;
    public ID: string;
    public Name: string;
    public Offerer: string;
    public Price: number;
}