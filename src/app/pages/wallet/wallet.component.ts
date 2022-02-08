import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  address: string[] = ["0x0000abcd0000"];
  balance: string = "101.0000";

  
  constructor( private blockchain: BlockchainService ) { }

  ngOnInit(): void {
  }


  connectAccount() {
    this.blockchain
      .connectAccount()
      .then((value: any) => {
        console.log(value);
        this.address = value;
        this.getDetails(this.address);
      })
      .catch((error: any) => {
        console.log("Could't get the account address");
        /*this.blockchain.failure(
          "Could't get the account data, please check if metamask is running correctly and refresh the page"
        );*/
      });
  }

  getDetails(account: any[]) {
    this.blockchain
      .accountInfo(account)
      .then((value: any) => {
        this.balance = value;
      })
      .catch((error: any) => {
        console.log("Could't get the account data");
        /*this.blockchain.failure(
          "Could't get the account data, please check if metamask is running correctly and refresh the page"
        );*/
      });
  }
}
