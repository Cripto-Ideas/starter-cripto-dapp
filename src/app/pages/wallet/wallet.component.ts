import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  address = "0x8888abcd8888";
  balance = "98.98888888";

  constructor() { }

  ngOnInit(): void {
  }

}
