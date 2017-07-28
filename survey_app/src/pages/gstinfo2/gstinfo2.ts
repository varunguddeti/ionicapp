import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Gstinfo2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-gstinfo2',
  templateUrl: 'gstinfo2.html',
})
export class Gstinfo2Page {info = [
    { title: "How do I calculate the value of supply under the GST?", description: `

    In order to determine the value of the goods and/or services to which GST will be applied, we have two different sets of rules according to the type of consideration the seller receives.

        (A)General Valuation Rules - These apply to transactions where the consideration is given entirely in monetary form.
            (1)In this case, the consideration can be calculated as the sum of the value of supply and the GST imposed upon the value of supply. In this case, the consideration is also equal to the total amount that you pay to a supplier when you purchase an item or a service. (Consideration = Value of Supply + GST on Value of Supply)
        (B)Special Valuation Rules - These apply to transactions where the consideration is provided fully or partially in non-monetary forms.
            (1)In transactions where the consideration is completely non-monetary, the value of supply can be calculated as the difference between the Open Market Value (OMV) of the product and/or service and the GST imposed on this value. (Value of Supply = OMV - GST on OMV)
            (2)In those transactions where the consideration is only partially monetary (it includes both cash and in-kind components), the consideration can be calculated as the sum of the monetary portion of the transaction and the OMV of the in-kind portion. (Consideration = Monetary Consideration + In-kind Consideration) In this case, the value of supply will be equal to the difference between the consideration received and the GST imposed on the consideration. > (Value of Supply = Consideration - GST on Consideration)
`},
    { title: "What do you mean by consideration under GST and why is it so important?", description: `

        (1)A consideration is anything received reciprocally for the supply of goods, services, or both. It can be monetary (through cash, credit cards or electronic transfers), non-monetary (through bartering of goods, exchange of services or having conditional arrangements in place), or a combination of both.
        (2)In simpler terms, consideration is something (money, a product, or a service) that you give to a supplier in exchange for a product or service that they’re providing to you. It includes any taxes involved.
        (3)For GST to be applied to a transaction, we need to establish the value of what’s being supplied. The consideration is important because it provides the primary way to calculate that value.
` },
    { title: "How do I calculate the GST levied on imported services?", description:`

    The GST to be paid on an imported service can be calculated by multiplying the total consideration by the taxable percentage to get the value of taxable supply, then multiplying that value by the GST rate.

    Let’s say that a company in India hires the services of a company from Japan for a project for 40 lakh rupees.

    *GST = Rate * (Taxable Percentage * Consideration)*

    Consideration = 40,00,000/-

    GST Rate = 10%

    Percentage of Taxable Supply = 40%

    GST = 10% * (40% * 40,00,000) = Rs. 1,60,000/-
 `},
    { title : "How do I calculate the value of supply on imported goods under the GST?", description: `The value of imported goods is calculated based on the rules provided in the Custom Act. The GST will be levied on the sum of the custom value of the imported goods and the import duty paid. (Custom Value + Import Duty = Taxable Value for GST)`},
    
    { title : "What happens to the GST levied on the value of supply if the supplier gives a discount?", description: `

    If a supplier of goods offers discounts to its customers, then the value of goods can be calculated as the difference between the original value of the goods and the discount amount. (Actual Value of Supply = Original Value - Discount.) The GST is levied upon the actual Value of Supply, not the original value. (*GST = Rate * Actual Value of Supply*)

    Let’s say a vendor sells televisions at Rs. 50,000 each. During the festive season, he offers a 10% discount on his televisions. So when a customer buys a television during the seasonal sale, the actual Value of Supply is calculated in this way:

    Actual Value of Supply = Original Value - Discount

    Original Value = 50,000/-

    Discount = 10% of 50,000 = 5,000/-

    Actual Value of Supply = 50,000 - 5,000 = Rs. 45,000/-

    So if the GST rate is 12% for this transaction:

    *GST = Rate * Actual Value of Supply*

    Rate = 12%

    Actual Value of Supply = 45,000/-

    GST = 12% of 45,000 = Rs.5,400/-

    The amount to be paid by customer is the actual value of supply plus the GST. In this case, the customer will pay 45,000 + 5,400 = Rs. 50,400/-.
`},
    { title : "What do you mean by related parties or associated parties under the GST? How do I calculate the value of transactions between related parties?", description: `

    According to the Indian Custom Valuation Rules (rule 2(2) of ICVR 2007), two persons or parties shall be deemed “related” only if -

        (1)They are professionally related. They can be officers/directors of one another’s businesses, legally recognized business partners, employ one another, etc.
        (2)Any person who directly or indirectly owns, controls or holds five per cent or more of the outstanding voting stock or shares of both of them;
        (3)Both of them are directly or indirectly controlled by a third person or vice versa;
        (4)They are members of the same family who do business together.
        (5)Persons who are associated in the business of one another, where one is the sole agent/ sole distributor/ sole concessionaire, of the other shall be deemed to be related.

    Transactions between related parties must follow the Arm’s Length Principle according to which the value of such any supply between them should be equal to its open market value.
`},
    { title : "Does it make a difference for the value of supply whether the transaction is associated with SGST, CGST, or IGST?", description: "No, the rules of valuation are the same for both interstate and intrastate trade."},
   
    { title : "How does the tax authority check a suspicious transaction value?", description: `This usually happens when the declared value is suspiciously high or suspiciously low.

    (1)Comparison method - In this method the officer evaluates the value of a transaction by comparing it with the values of similar transactions involving goods or services of like kind and quantity. When using this method, the officer will consider factors like dates of supply, commercial levels, the nature of the goods or services, and other expenditures related to the place of supply.
    (2)Computed value method - Under this method, the officer considers the value of supply to be equal to the complete cost of the goods and/or services involved (including profit margins). This method is imposed only when the correct value of supply cannot be determined using the comparison method.
    (3)Residual method - An officer resorts to using this method when both the comparison method and the computed value method cannot be used. Under these circumstances, the officer can determine the value within reasonable means consistent with the principles and general provisions of the GST valuation rules.
.`},
    { title : "How are stock transfers between different locations of the same organization valued under GST?", description: "It’s important to consider whether the stock is being transferred between states, or within a single state. Under GST, interstate transfer of stock within the same organization is viewed as a taxable supply, even though there is no consideration provided (as nothing will be received reciprocally for such a transaction). The value of supply is equivalent to the declared value of the products that are being transferred.Stock transfers within the same state are not taxable, so there is no need to determine their value for GST."},
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
    console.log('ionViewDidLoad Gstinfo2Page');
  }
  navigateToHomePage(): void
  {
    this.navCtrl.push(HomePage)
  }
}
