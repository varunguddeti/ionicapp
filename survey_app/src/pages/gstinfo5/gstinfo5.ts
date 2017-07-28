import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the Gstinfo5Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-gstinfo5',
  templateUrl: 'gstinfo5.html',
})
export class Gstinfo5Page  {
  

  info = [
    { title: "What payment modes are available and how do they work?​", description: `

    Payment is carried out in the following ways:

        (1)The amount can be debited in the credit ledger of the GSTN Common Portal. This method is used solely for taxes. Taxpayers may use the credited taxes paid on input for payment of output tax. However, the input tax credit from SGST accounts cannot be used to process payments for CGST or vice-versa.
        (2)Cash can be debited from the Cash Ledger of the taxpayer’s account on the common GSTN portal. A few different modes of deposit, such as credit card, debit card, and internet banking, are available.
        (3)Through credit card: The credit card must be registered prior to payment. Verification of the credit card is carried out by the service provider, after which the transactions can proceed.

`},
    { title: "What are the key features of the GSTN Common Portal?", description: `

    The GSTN common portal offers the following features:

        (1)Hassle-free payment: Citizens can pay their taxes regardless of their location.
        (2)Electronic generation of challans for all modes of payment.
        (3)Allows easy access to the registered user’s tax data.
        (4)Ease of revenue remittence to the Government’s account.
        (5)Facilitates electronic reconciliation of all receipts.

`},
    { title: "What are some important features of the electronic challan?", description: `

    Once the taxpayer logs on to the GSTN portal, payment particulars must be filled out for the generation of a Challan.

        (1)Once the challan is filled, it can be saved for future moderation. A saved challan can also be edited before finalization. A challan is only valid for 15 days after its generation.
        (2)After finalization, a unique 14-digit number called a CPIN (Common Portal Identification Number) is generated to identify the challan.
        (3)Finally,a CIN (Challan Identification Number), a 17-digit number made up of the 14- digit CPIN and a 3- digit bank code, is generated. Generation of the CIN indicates finalization of the payment that will be credited to the Government’s account. A real-time two-way linkage between GSTN and Core Banking Solution (CBS) routes the CPIN to the bank for verification and the CIN from the bank after confirmation.

`},
    { title : "What is E-FPB?", description: "E-FPB stands for Electronic Focal Point Branch. These are the branches of banks that are authorized for payment collection of GST. Each authorized bank nominates one branch as its E-FPB for Pan-India transactions. For NEFT/RTGS transactions, RBI acts as E-FPB. The E-FPB has 38 accounts (one each for CGST, IGST, and several SGSTs and one for each State/Union Territory)."},
    { title : "What happens when a taxable person files the returns but fails to make payment?", description: `

    The returns filed by that person will be considered invalid until the taxes due are paid completely. The valid returns alone are used to allow ITC (input tax credit) to the recipient. A taxable person will not be permitted to utilize the credit until the self-assessed tax liability is paid.

    Example: * A supplier pays the entire amount of self-assessed tax and files his returns. * The recipient of the amount then files his returns. * Only after Step 2 is the ITC of the recipient confirmed.
`},
  ];

  shownGroup = null;

  constructor(public navCtrl: NavController) {
  }

  toggleGroup(group) {
      if (this.isGroupShown(group)) {
          this.shownGroup = null;
      } else {
          this.shownGroup = group;
      }
  };
  isGroupShown(group) {
      return this.shownGroup === group;
};

  ionViewDidLoad() {
    console.log('ionViewDidLoad Gstinfo5Page');
  }
  navigateToHomePage(): void
  {
    this.navCtrl.push(HomePage)
  }

}
