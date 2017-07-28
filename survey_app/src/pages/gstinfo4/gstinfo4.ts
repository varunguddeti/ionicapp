import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the Gstinfo4Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-gstinfo4',
  templateUrl: 'gstinfo4.html',
})
export class Gstinfo4Page  {
  

  info = [
    { title: "What is an exemption? What are the exemption limits proposed by the Indian Government?", description: `

    Generally, a tax is levied on all goods and services according to the guidelines set by the Government. But in some cases, the Government might deviate from the guidelines due to difficulties in levying the tax in various economic sectors. Therefore, exemptions are permitted in various forms along with threshold limits and geographical exemptions. Specific items may be excluded from VAT for reasons relating to the product or its usage. The exemption limit for businesses in the North Eastern states will be Rs 10 lakhs, and the exemption limit for businesses in other Indian states will be Rs 20 lakhs.

        (1)Only supplies sold within the state and free supplies are covered under the exemption. All other supplies require registration.
        (2)The exemption limit is applicable to all the states in India, including the states of Jammu and Kashmir.

` },
    { title: "Under what conditions are exemptions NOT applicable?", description: "One of the main reasons why the GST is being introduced in India is because of the cascading effect of taxes. In the current tax system, multiple taxes are collected at each stage of the supply chain, without any credit for the taxes paid at previous stages. From the moment a manufacturer buys raw materials to the moment a customer purchases the finished product, taxes are applied in addition to the taxes levied at all the other stages. As a result, by the time a finished product reaches the end consumer, it’s unclear what is the actual cost of the product and how much tax was applied. This tax cascading makes the current structure complex, inefficient, and non-transparent.The GST will integrate most indirect taxes, and will instead apply a single tax on the sale and purchase of goods and services, with deductions available for taxes paid during previous supply chain stages. This simplified tax structure is expected to be easy to set up and track for both government authorities and business owners, which in turn will fill the gaps in tax compliance." },
    { title: "What are the taxes that the GST will replace?", description: `

    Taxable persons in the following situations will have to register irrespective of their turnover:

        (1)Individual making taxable supply outside the state
        (2)Casual Taxable Person
        (3)Individual who is required to pay under the Reverse Charge Mechanism
        (4)Non-resident Taxable Person
        (5)A person who is required to deduct tax (such as an e-commerce operator)
        (6)A person who supplies goods or services as an agent of any other person.
        (7)Input Service Distributor
        (8)Every e-commerce operator
        (9)An aggregator who supplies services under their brand name

 `},
    { title : "Why has the Indian Government proposed minimal laws with respect to exemptions in GST?", description: "Under the previous tax laws, the system of exemptions became increasingly complex over time, causing poor compliance. Eventually it became doubtful whether the exemptions even served their intended purpose. Under GST, the Indian Government is limiting exemptions in order to keep the system simpler and more rational."
  },
    { title : "What are the internationally accepted exemptions?", description: `

    The forms of internationally accepted exemptions are:

        (1)Exempt Supplies: These supplies do not bear output tax, so the suppliers need not collect or remit tax for them. (They are excluded from Input Credit Tax as well.)

        (2)Out-of-scope Supplies: These supplies are not included within the scope of GST due to technical reasons (related to product design).

        (3)Out -of- scope Suppliers:

        (4)Businesses with turnover less than the mandatory GST threshold.

        (5)Entities that are excluded from the scope due to judicial interpretations of the legislation.

        (6)Entities that are explicitly prevented from registration by the legislative exclusions.

`},
    { title : "What is Merit-based or Concessional Exemption?", description: "Merit- based or Concessional Exemption is the exemption provided to essential products — like certain food items and other basic amenities — to maintain the stability of the GST rate."
  },
    { title : "What are Technical Exemptions?", description: `

    Certain categories of exemptions are mandatory owing to the pragmatic difficulties in tax collection on those supplies. The 3 types are:

        (1)Supplies related to immovable property
        (2)Financial services
        (3)Intermediary pooling services, like insurance and gambling

`},
    { title : "What entities are exempted from CGST and SGST under the new laws?", description: `

    The following entities are exempted from CGST and SGST according to the 13th Finance Commission’s Task Force:

        (1)All public services provided by the Government
        (2)Service transactions between employees and employers.
        (3)Unprocessed food items included under the Public Distribution System
        (4)Educational services provided by non-government schools and colleges
        (5)Health services provided by non-government agencies

`},
    { title : "What items are exempted or taxed at lower rates, under GST?", description: `

    The exempted items are:

        (1)Food Unprocessed food — like fruits, vegetables, meat, and eggs — is covered under the State VAT exemption. All beverages except milk are taxable. The exemption in State VAT is restricted to unprocessed food ONLY.
        (2)Textiles
        (3)Health Services
        (4)Educational Services
        (5)Services by any court or tribunal.

    Items 2 to 5 may be exempted from GST or have tax levied at lower rates, depending on the entity, jurisdiction, and policies of the Government.
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
    console.log('ionViewDidLoad Gstinfo4Page');

  }
  navigateToHomePage(): void
  {
    this.navCtrl.push(HomePage)
  }

}
