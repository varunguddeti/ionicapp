import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FaqPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-faq',
  templateUrl: 'faq.html',
})
export class FaqPage {
  

  info = [
    { title: "What is the GST?", description: "The Goods and Services Tax, or GST, is a new tax that will be levied on the sale and purchase of goods and services. Unlike existing taxes in India, the GST will be applied to the value added at each stage of the supply chain of a product, rather than on the total value of the product at each stage. Buyers will get input tax credits for the tax paid on the purchase of goods and services, which they can offset with the tax to be paid on the supply of goods and services. As a result, the customer who purchases the product at the end of the supply chain process will pay only the tax applied by the last seller in the supply chain.Let’s take a look at an example of how the GST process will work. Let’s assume that the raw materials to make a pair of shoes cost Rs.100. If the GST rate is 10%, then Rs.10 will be added as tax, and the manufacturer will purchase these supplies for Rs.110 (100 + GST 10%). After making a pair of shoes, he adds a value of Rs.100 (his profit margin). Now here, instead of applying that 10% tax to the new total value of Rs. 210 (Rs.110 + Rs.100), under the GST, that tax will only be applied to the value addition of Rs. 100 (this will add another Rs. 10). The manufacturer would then sell his shoes to a retailer for Rs. 220 (Rs. 210 + Rs. 10). The retailer then adds a value of Rs.100, and GST of 10% (Rs. 10) is applied to that value addition, which places the total cost of the shoes at Rs.320 (Rs.310 + Rs.10) for the end consumer." },
    { title: "Why is GST being introduced in India?", description: "One of the main reasons why the GST is being introduced in India is because of the cascading effect of taxes. In the current tax system, multiple taxes are collected at each stage of the supply chain, without any credit for the taxes paid at previous stages. From the moment a manufacturer buys raw materials to the moment a customer purchases the finished product, taxes are applied in addition to the taxes levied at all the other stages. As a result, by the time a finished product reaches the end consumer, it’s unclear what is the actual cost of the product and how much tax was applied. This tax cascading makes the current structure complex, inefficient, and non-transparent.The GST will integrate most indirect taxes, and will instead apply a single tax on the sale and purchase of goods and services, with deductions available for taxes paid during previous supply chain stages. This simplified tax structure is expected to be easy to set up and track for both government authorities and business owners, which in turn will fill the gaps in tax compliance." },
    { title: "What are the taxes that the GST will replace?", description: "Currently, there are several indirect taxes that are collected by both the state and central governments on every purchase and sale.Below is a list of central taxes that the GST will replace:1)Central Excise Duty.2)Additional Excise Duties.3)Excise Duty (Medicinal and Toiletries Preparation).4)Service Tax.5)Additional Customs Duty, commonly known as Countervailing Duty (CVD).6)Special Additional Duty of Customs.7)Surcharges.8)Cesses.Here’s a list of state taxes that will be replaced by GST:1)VAT / Sales Tax.2)Entertainment Tax (unless it is levied by the local bodies).3)Luxury Tax.4)Taxes on lottery, betting, and gambling.5)State Cesses and Surcharges that are related to the supply of goods and services.6)Entry Tax, not in lieu of Octroi." },
    { title : "How will the GST work once it’s implemented?", description: "The GST will follow a dual model with two components: the Central GST (CGST), levied by the Centre, and State GST (SGST), levied by the State. The CGST and SGST will be treated as separate entities. As a third statute, for the inter-state transaction of goods, the Integrated GST (IGST) will be collected by the Centre from the buying state.The CGST and SGST will be applied to all transactions of goods and services, except for exempted goods and transactions whose values are below the prescribed threshold limit.The CGST and SGST will be paid to the Central and State accounts respectively. Tax returns should be filed with the appropriate CGST and SGST authorities respectively.The dealers and manufacturers who pay the CGST will be given input tax credit (ITC), or credit for taxes they paid on their purchases. This credit can be used only against the CGST paid. The same is applicable in the case of the SGST. The credits of the CGST cannot be used for paying the SGST, or vice versa.Taxpayers will be given a unique identification number linked to their PAN cards to facilitate income tax information exchange and business tax compliance."},
    { title : "Which goods and services will not be covered by the GST?", description: "The existing taxation that has applied to the following goods and services will not be fully or partially covered by the GST:(1)Alcohol for human consumption (State Excise plus VAT will continue to be applied).(2)Electricity (Electricity Duty).(3)Real Estate (Stamp Duty plus Property taxes).(4)Tobacco products (GST plus Central Excise will be applied)."},
    { title : "How are imports handled under the GST system?", description: "A combination of both the CGST and SGST will be applied to the import of goods and services into India. The tax benefits and tax offset credits will be given to the state which consumes the imported goods and services.In the case of international exports, custom duties will continue to apply. The Special Additional Duties (SAD) and the Additional Duty of Customs will be replaced by the GST."},
    { title : "What is the proposed rate of the GST?", description: "The GST council has proposed a four-tier tax model that includes a base rate of 5% on goods like edible oil, spices, tea, coffee, etc., standard rates of 12% on products like computers, processed food, and cycles, an 18% on most services as well as items such as soap, shaving razors, etc., and a higher rate of 28% on demerit goods like SUVs, tobacco products, and aerated drinks. The goods coming under the 28% tax bracket will also attract additional cess on top of GST. Apart from this, about 50% of the products in the consumer basket, such as food grains, will be kept zero rated."},
    { title : "What is the exemption limit in the GST?", description: "Businesses in India that have a turnover revenue of 20 lakhs and above will have to register and file for GST returns. Businesses in the north east and hill states with a turnover revenue of under 10 lakhs will be exempt from filing the GST."},
    { title : "How will businesses owners benefit from the GST?", description: "(1)Business owners can sell more in other states without worrying about interstate transaction costs. There will be no entry tax under the GST, which will save money and time spent at check posts at each state border.(2)Businesses can enjoy reduced tax burden and operating costs. With Input Tax Credits under the GST system, there will no longer be a need for tax cascading. Business owners can offset the tax paid on the purchase of goods and services with the tax on the supply of goods and services.(3)It will be easier for business owners to comply with tax laws under the GST. Currently there are up to 15 different legislatures with different definitions, tax rules and regulations. GST will replace several of these taxes, simplifying the compliance process for businesses."},
    { title : "How will the GST impact customers?", description: "Under the current system, from the production to the consumption of a product, there are multiple taxes that are applied without the provision of tax credits. As a result, the price of the final product is increased, causing the customer to pay more. The GST will absorb many of the current taxes into a single tax, while also providing tax credits. This will reduce the price of final products for end consumers."},
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
    console.log('ionViewDidLoad FaqPage');
  }

}
