import { Block } from "./block";

export class Blockchain {
  public chain: Block[];

  constructor(){
    this.chain = [this.createGenisisBlock()];
  }

  public createGenisisBlock() {
    return new Block(0, new Date(), "Gensis block", "0");
  }

  public getLatestBlock() {
    return this.chain[this.chain.length -1];
  }

  public addBlock(newBlock: Block) {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }
}