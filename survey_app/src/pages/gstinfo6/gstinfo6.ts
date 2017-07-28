import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the Gstinfo6Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-gstinfo6',
  templateUrl: 'gstinfo6.html',
})
export class Gstinfo6Page  {
  

  info = [
    { title: "WWhat is a GST refund? What are the deadline and threshold for refunds?", description: `

    A GST refund includes the tax paid on:

        (1)Exported goods and services.
        (2)Inputs or input services used in exported goods and services.
        (3)Goods that are regarded as Deemed Exports.
        (4)Unutilized Input Tax Credit (ITC).

    You must file an application for a refund prior to the expiration date (two years from the date the taxes were paid). The minimum threshold for refund is an amount of Rs 1000/-; a refund will not be granted if the amount is less than Rs 1000/-.
`},
    { title: "What are the conditions for unutilized Input Tax Credit (ITC) to be permitted as a refund?", description: `

    (A)Unutilized ITC is permissible as a refund in the following cases:

        (1)Exported goods without payable export duty.
        (2)Exported services.
        (3)At the end of any loan period, if the rate of tax on inputs is greater than the rate of tax on outputs.

    (B)Unutilized ITC is not permissible as a refund in the following cases:

        (1)Exported goods with payable export duty.
        (2)Goods that have been piled up as stock towards the end of the financial year. In this case, the process should be carried forward without any refund.

`},
    { title: "Will the tax be sanctioned if it’s passed on to the customer? If so, what is the deadline?", description: "Yes, the tax will be sanctioned and the calculated amount will be credited to the Consumer Welfare Fund. The deadline is after a period of 90 days, unless the refund amount adds up to 80% of the net amount. That amount is refundable to specific categories of exporters. Failing to sanction the refund within a period of 3 months will lead to interest, which will be paid by the Department."
   },
    { title : "When is a refund withheld by the Department?", description: `

    Refunds are withheld until a few conditions are met:

        (1)The registered dealer submits or files the returns.
        (2)The taxable person has paid the required tax, interest, or penalty, as stated by the concerned authority or the Tribunal court. Should the taxable person’s proceeding appeal result in entitlement to refund, they will be entitled to interest.

`},
    { title : "How are refunds arising from earlier tax laws paid?", description: "he earlier laws remain the same for refunds arising from them. Refunds will be paid in cash under CGST or SGST, depending upon the jurisdiction, and the refunds will be unavailable as ITC."
  },
    { title : "What are the formalities involved in export refunds?", description: "Notified groups of dealers who are given export refunds are granted 80% of the refund prior to verification, under specified restrictions mentioned under Section 38(4A). It is recommended by the Government that a BRC (Bank Realization Certificate) is not required at the time the refund application is filed and verified. In cases involving export refunds, the refund is subjected to submission within a period of one year (maximum). The time period may be extended by RBI from the relevant date of export."
  },
    { title : "What is unjust enrichment? What are the formalities regarding unjust enrichment?", description: `

    Unjust enrichment is a legal concept that refers to certain situations where one person benefits unlawfully at the expense of another.

    The following are some of the rules applying to unjust enrichment:

        (1)Unjust enrichment is not applicable to real-time exports of goods and services, since the recipient is located outside the taxable territory.
        (2)Unjust enrichment is applicable in the case of Deemed Exports.
        (3)Unjust enrichment is applicable to refunds except in cases of exported goods and unutilized ITC.
        (4)Should a taxable person want to claim that unjust enrichment is not applicable to them, the concerned person should provide a relevant application for the claimed refund, along with proof that the tax or interest was paid.
        (5)Only self-declaration is required when the claimed refund is less than Rs 5 lakhs.

`},
    { title : "How do the refunds in GST differ from the previous procedures?", description: `

    There are 2 main differences:

        (1)Previously, declaration forms citing tax payments were not necessary for CST/VAT exporters while purchasing goods. Under GST, a refund should be claimed after payment of tax for the purchased goods.

        (2)Under the laws of the Central Government, exporters were permitted to do the following:

        (3)Under the laws of the Central Government, exporters were permitted to get duty-paid inputs, obtain ITC on them, collect duty while exporting the goods, and then claim refunds based on the duty paid.

        (4)Under GST, exports are given a rating of zero. This eliminates the tax liability on export goods despite the fact that tax is mandatory for the inputs of those goods.

        (5)Refunds are permitted for accumulated inputs and exported goods.​

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
    console.log('ionViewDidLoad Gstinfo6Page');
  }
  navigateToHomePage(): void
  {
    this.navCtrl.push(HomePage)
  }

}
