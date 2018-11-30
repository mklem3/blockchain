import SHA256 from 'crypto-js/sha256';

export class Block {
  public index: number;
  public timestamp: Date;
  public data: any[];
  public previousHash: string;
  public hash: string;

  constructor(index: number, timestamp: Date, data: any, previousHash: string){
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
  }

  calculateHash(): string {
    return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
  }
}