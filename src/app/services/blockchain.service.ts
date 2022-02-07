import { Injectable } from '@angular/core';
import Web3 from 'web3';

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {


  private windowBrowser: any;
  private web3: any;

  constructor() { 
    
    console.log('BlockChain Service Construct');
    console.log(Web3);
    this.windowBrowser = window;
  }

  async loadWeb3() {
    
    console.log(this.windowBrowser.ethereum);

    if(this.windowBrowser.ethereum) {
      console.log('es eth');
      this.web3 = new Web3(this.windowBrowser.ethereum)
      await this.windowBrowser.ethereum.enable()
    }
    else if (this.windowBrowser.web3) {      
      console.log('no es eth');
      this.web3 = new Web3(this.web3.currentProvider)
    }

    else {
      window.alert('¡Considera usar Metamask!')
    }

    console.log(this.web3);
  }
}
