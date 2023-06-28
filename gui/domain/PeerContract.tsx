export class PeerContract {

    constructor(ID: string, Peer: string, Contracts: Array<string>) {
        this.ID = ID;
        this.Peer = Peer;
        this.Contracts = Contracts;
    }

    public ID: string;
    public Peer: string;
    public Contracts: Array<string>
}