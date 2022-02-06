import {Inject, Injectable} from '@angular/core';
import { WEB3 } from '../core/web3';
import { Subject } from 'rxjs';
//import { MatSnackBar } from '@angular/material/snack-bar';

import Web3 from 'web3';
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {

  public accountsObservable = new Subject<string[]>();
  public compatible: boolean | undefined;
  web3Modal: any;
  web3js: any;
  provider: any;
  accounts: any;
  balance: any;

  //constructor(@Inject(WEB3) private web3: Web3 ,private snackbar: MatSnackBar) {
  constructor(@Inject(WEB3) private web3: Web3) {
      const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          infuraId: "27e484dcd9e3efcfd25a83a78777cdf1" // required
        }
      }
    };

    this.web3Modal = new Web3Modal({
      network: "mainnet", // optional
      cacheProvider: true, // optional
      providerOptions, // required
      theme: {
        background: "rgb(39, 49, 56)",
        main: "rgb(199, 199, 199)",
        secondary: "rgb(136, 136, 136)",
        border: "rgba(195, 195, 195, 0.14)",
        hover: "rgb(16, 26, 32)"
      }
    });
  }


  async connectAccount() {
    this.provider = await this.web3Modal.connect(); // set provider
    this.web3js = new Web3(this.provider); // create web3 instance
    this.accounts = await this.web3js.eth.getAccounts();
    return this.accounts;
  }

  async accountInfo(accounts: any[]){
    const initialvalue = await this.web3js.eth.getBalance(accounts[0]);
    this.balance = this.web3js.utils.fromWei(initialvalue , 'ether');
    return this.balance;
  }

  /*failure(message: string) {
    const snackbarRef = this.snackbar.open(message);
    snackbarRef.dismiss()
  }

  success() {
    const snackbarRef = this.snackbar.open('Transaction complete successfully');
    snackbarRef.dismiss()
  }*/

}