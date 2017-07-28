import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Gstinfo1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-gstinfo1',
  templateUrl: 'gstinfo1.html',
})
export class Gstinfo1Page {

  info = [
    { title: "Who should register for GST?", description: `

    Any business with an aggregate turnover, as specified below, should register for the GST. If you fall below the threshold, you can choose not to register, but you cannot add the GST charge to your customers’ purchases. If your turnover goes above the threshold at a later point in time, you need to register within 30 days.

    Aggregate turnover is the combined value of all taxable and non-taxable supplies, exempt supplies, and export of goods and services of a person with the same PAN. The value of inward supplies, as well as those on which reverse charge is levied, are not included in this.

    If you are already registered for one or more of the following taxes, you need to register for the GST during the registration window for your state:

        (1)Central Excise
        (2)Service Tax
        (3)State Sales Tax/VAT (except exclusive liquor dealers if registered under the VAT)
        (4))Entry Tax
        (5)Luxury Tax
        (6)Entertainment Tax (except for those levied by local bodies)

    The following business have to register, irrespective of the turnover:

        (1)Businesses selling taxable goods outside the state
        (2)Casual taxable person
        (3)Businesses required to pay reverse charge
        (4)Non-resident taxable person
        (5)Businesses that are required to deduct tax (e.g. e-commerce business operating in a marketplaces such as Amazon)
        (6)The person supplying goods or services or both as an agent of any other person
        (7)Input Service Distributor
        (8)E-commerce operator
        (9)An aggregator who supplies services under his brand name`},
    { title: "When should I register?", description: "UPDATE: The window for registration for existing tax payers has opened for all states and Union Territories. The last date of registering has not been disclosed yet." },
    { title: "Why should I register?", description: "Registered businesses can collect the GST on their sales. Additionally, their GST registration makes them eligible to claim input tax credits while filing their returns. Keep in mind that even if your turnover is below the threshold, you can choose to register for the GST." },
    { title : "What do I need to register?", description: `

    You must ensure you have the following official documents ready before you begin the registration process:

        (1)Provisional ID received from State/Central Authorities
        (2)Password received from the State/Central Authorities
        (3)Valid email address
        (4)Valid mobile number
        (5)Bank account number
        (6)Bank IFSC

    In addition to these, you are also required to present the following documents:

    (A)Limited Liability Company:

        (1)Company PAN card
        (2)Registration certificate of the company
        (3)Memorandum of Association (MOA) /Articles of Association (AOA)
        (4)Copy of company’s cancelled cheque
        (5)Declaration to comply with the provisions
        (6)Copy of board resolution
        (7)PAN and ID proof of directors
        (8)Copy of electricity bill/landline bill/water bill
        (9)No objection certificate of the owner
        (10)Rent agreement (in case premises are rented)

    (B)Limited Liability Partnership:

        (1)PAN card of the LLP
        (2)Registration certificate of the LLP
        (3)LLP partnership agreement
        (4)Copy of LLP’s cancelled cheque
        (5)Declaration to comply with the provisions
        (6)Copy of board resolution
        (7)PAN and ID proof of designated partners
        (8)Copy of electricity bill/landline bill/water bill
        (9)No objection certificate of the owner
        (10)Rent agreement (in case premises are rented)

    (C)Sole proprietorship:

        (1)PAN card and ID proof of the individual
        (2)Copy of cancelled cheque or bank statement
        (3)Declaration to comply with the provisions
        (4)Copy of electricity bill/landline bill/water bill
        (5)No objection certificate fro the owner
        (6)Rent agreement (in case premises are rented)

`},
    { title : "How do I register?", description: `
    (1)Obtain your Provisional ID and password from your State VAT Authority. You will use this to log in to the GST portal.
    (2)Enter your mobile number and email address (or fill in the information of the authorized signatory). You will receive an OTP, which you need to enter. All future correspondence from the GST portal will be sent to this registered mobile number and email address.
    (3)Create a username and password, and answer the security questions that follow.
    (4)You will then be taken to your dashboard, where you can fill in your details. At the top of the page, there are eight tabs: Business Details, Promoters/Partners,Authorized Signatory, Principal Place of Business, Additional Place of Business, Goods & Services, Bank Accounts, and Verification. Enter the necessary information in these tabs.
    (5)Once you have filled all the details, click on the Submit with DSC button to complete the registration process. Make sure that you have updated your Digital Signature Certificate (DSC) in the same portal. You will receive an acknowledgement with a reference number in your registered mobile and email.
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
    console.log('ionViewDidLoad Gstinfo1Page');
  }
  navigateToHomePage(): void
  {
    this.navCtrl.push(HomePage)
  }
}
