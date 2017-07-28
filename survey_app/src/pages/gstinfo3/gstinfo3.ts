import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the Gstinfo3Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-gstinfo3',
  templateUrl: 'gstinfo3.html',
})
export class Gstinfo3Page {
  

  info = [
    { title: "What is a return?", description: "A return is a statement of financial activity by a taxable person for a prescribed period. This allows a taxable person to self-assess the tax they owe for that period." },
    { title: "Under the GST, who is required to file returns regularly and who isn’t?", description: `

    Every registered taxable person is required to file returns under the GST law. If you have not performed any business activities during the period covered by a return, you need to file a Nil return.

    There are some entities that will need to register for GST but aren’t required to file returns regularly, such as UN bodies (and foreign consulates) must register for a unique GST ID, but they are required to file returns only for months during which they make purchases.

    Some entities do not need to register or file returns. Government entities and Public Sector Undertakings (PSUs), entities dealing with non-GST supplies, and those who deal with exempted/Nil rated/non GST goods and/or services will neither be required to register under the GST nor file returns.
`},
    { title: "What are the different types of GST returns?", description: `

    There are a total of 11 types of returns under the GST.

        (1)GSTR-1: monthly return for outward supplies
        (2)GSTR-2: monthly return for inward supplies
        (3)GSTR-3: monthly return containing details from other monthly returns filed by the taxpayer (GSTR-1, GSTR-2, GSTR-6, GSTR-7)
        (4)GSTR-4: quarterly return
        (5)GSTR-5: variable return to be filed by Non-Resident Taxpayers
        (6)GSTR-6: monthly return to be filed by input service distributors
        (7)GSTR-7: monthly return to be filed for Tax Deducted at Source (TDS) transactions
        (8)GSTR-8: monthly return to be filed by e-commerce operators
        (9)GSTR-9: annual return
        (10)GSTR-10: final return to be filed when terminating business activities permanently
        (11)GSTR-11: to be filed by taxpayers with a Unique Identity Number (UIN)

` },
    { title : "What do I need to record on the GSTR-1?", description: `

    The GSTR-1 contains the details of all your outward supplies or sales. It needs to be filed before the 10th of the following month, and it includes:

        (1)The taxpayer’s basic information (name, GSTIN, etc.)
        (2)Period for which the return is being filed.
        (3)During the first year under GST, the taxpayer’s gross turnover for the previous financial year should also be included. (In subsequent years, this information will be auto-populated.)
        (4)Final invoice-level supply information related to the tax period, listed separately for goods and services:
            (4.1)For B2B supplies: submit invoice-wise details for all transactions.
            (4.2)For B2C supplies:
                (4.2.1)If invoice amount is greater than Rs. 2,50,000, submit invoice-wise details for all transactions.
                (4.2.2)If invoice amount is between Rs. 50,000 and Rs. 2,50,000, submit the addresses of your buyers along with a summary of your interstate transactions by state.
                (4.2.3)If invoice amount is less than Rs. 50,000, buyer addresses are needed only for interstate transactions.
        (5)Appropriate Harmonised System Nomenclature (HSN) codes according to the type of supply and turnover.
            (5.1)If your turnover is greater than Rs. 5 Cr, use a 4-digit HSN code (Preceding FY).
            (5.2)If your turnover is between Rs. 1.5 Cr and Rs. 5 Cr, use a 2-digit HSN code (Preceding FY).
            (5.3)You can also opt to use 6-8 digit HSN codes irrespective of your turnover.
            (5.4)For imports & exports, use 8-digit HSN codes.
        (6)Consolidated supply details on all intrastate B2C supplies with or without invoice details (submission of invoice details is optional).

`},
    { title : "What makes the GSTR-2 important?", description: `

    The GSTR-2 contains the details of all of your inward supplies, which is necessary for claiming input tax credit for your outward supplies. It needs to be filed before the 15th of the following month, and it includes:

        (1)The taxpayer’s basic information (name, GSTIN, etc.)
        (2)The period for which the tax return is being filed.
        (3)Final invoice-level inward supply information related to the tax period, listed separately for goods and services.
        (4)The information submitted by the counter-party (the supplier of the inward goods or services) in their GSTR-1 will be auto-populated in the taxpayer’s GSTR-2.
        (5)Input tax credit (ITC) received on invoices for which you have already availed partial credits.
`},
    { title : "What goes into the GSTR-3?", description: `

    The GSTR-3 is a consolidated monthly GST return, so its contents will be automatically derived from other monthly returns. However, you can manually update details or add missing information as needed. In addition to the auto-populated details, the GSTR-3 contains:

         (1)The taxpayer’s basic information (name, GSTIN, etc).
         (2)Period to which the return pertains.
         (3)Turnover details (including gross turnover, export turnover, exempted domestic turnover, Nil-rated domestic turnover, non-GST turnover, and net taxable turnover)
         (4)Final aggregate-level inward and outward supply details (automatically derived from GSTR-1 and GSTR-2).
         (5)Tax liability under CGST, SGST, IGST, and additional tax (+1% tax).
         (6)Details about your ITC, Cash, and Liability ledgers.
         (7)Details of other payments such as interests, penalties, and fees.

`},
    { title : "What is the GSTR-4 quarterly return?", description: `

    The GSTR-4 is required to be filed on a quarterly basis (every three months). This return specifically applies to compounding dealers (those who have a turnover of < Rs. 50,00,000 and are enrolled in the composition scheme).

    In this return, you need to indicate the total value of supply made during the period covered by the return, along with the details of the tax paid at the compounding rate (not more than 1% of aggregate turnover) for the period. As a compounding dealer, you only need to provide invoice-wise details for inward supplies if they are either imports or purchased from normal taxpayers.
`},
    { title : "I am a Non-Resident taxpayer doing business in India. How do I file returns under the GST?", description: `

    Before we dive into GST returns, let us first try to understand who a Non-Resident taxpayer is. A Non-Resident taxpayer is a taxable person who occasionally undertakes transactions involving supply of goods and/or services but who has no fixed place of business in India.

    Non-Resident taxpayers are required to file the GSTR-5 for their registered period (which can range from days to weeks to months). This return has to be filed within a period of 7 days after the expiry date of the registration. If the registered period is more than a month, then this return has to be filed every month for the remainder of the registered period.
`},
    { title : "Who are Input Service Distributors (ISD)? What returns do they need to file?", description: `

    An Input Service Distributor (ISD) is the corporate office of a supplier of goods and/or services which receives tax invoices for inward supplies made by vendors on behalf of the branch offices in order to distribute tax credits.

    In addition to the regular GSTR-1, 2, and 3, ISDs also have to file the GSTR-6, which contains:

        (1)The taxpayer’s basic information (name, GSTIN, etc).
        (2)Period to which the return pertains.
        (3)Invoice-level supply details will be automatically fetched from the GSTR-1, but you can also manually update them.
        (4)Invoice details, including the GSTIN of the taxpayer receiving the credit.
        (5)Separate ISD ledger containing the opening ITC balance for the period, credit for ITC services received, debit for ITC reversed or distributed, and closing balance.

`},
    { title : "I perform transactions where I am required to deduct tax at the source. How do I record this under the GST?", description: `

    For transactions where you deduct tax at the source (under section 37 of model CGST and SGST law), you need to file the GSTR-7 along with your other monthly returns.

    The GSTR-7 contains:

        (1)Taxpayer’s basic information (name, GSTIN, etc).
        (2)Period to which the return pertains.
        (3)Supplier’s GSTIN.
        (4)Invoices against which the tax has been deducted (categorized under the major tax heads - SGST, CGST, and IGST).
        (5)Other payments such as interests and penalties.

`},
    { title : "I am an e-commerce operator. Do I need to file any special GST returns?", description: `

    Yes, all e-commerce operators who allow other suppliers to sell goods or services through their portals are required to file the GSTR-8 return. Those who use their own portal to sell their goods or services need not file this return. The GSTR-8 needs to be filed before the 10th of the following month, and it contains:

        (1)The taxpayer’s basic information (name, GSTIN, etc).
        (2)The period to which the return pertains.
        (3)Supplies made to customers through the e-commerce portal by both registered taxable persons and unregistered persons.
        (4)Your customers’ basic information (whether or not they are registered taxpayers).
        (5)The amount of tax collected at source, tax payable, and tax paid.

`},
    { title : "What is the GSTR-9 return?", description: `

    The GSTR-9 return, also known as the annual return, must be submitted by all normal taxpayers (not for Non residential taxpayers). It provides a complete view of the taxpayer’s activities and allows their returns to be reconciled with their audited financial statements.

    The annual return captures the taxpayer’s income and expenditure in detail. These are then regrouped according to the monthly returns filed by the tax payer. This return allows the taxpayer to properly update any details that were not reported during the year.

    The annual return does not meet the reconciliation requirements for taxpayers who are required to have their accounting audited under section 44AB of the Income Tax Act of 1961. Those taxpayers must also file a dedicated reconciliation statement, which must be duly certified by a Chartered Accountant.
`},
    { title : "What GST returns need to be filed if a registered business terminates its operations permanently?", description: "Any business that permanently terminates its operations is required to file the GSTR-10, also known as the final GST return."},
    { title : "Who is required to file the GSTR-11?", description: "The GSTR-11 return is to be filed only by those entities or persons that possess a Unique Identity Number (UIN), and only during those months when they make inward supplies (purchases). It must be filed before the 28th of the following month."},
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
    console.log('ionViewDidLoad Gstinfo3Page');
  }
  navigateToHomePage(): void
  {
    this.navCtrl.push(HomePage)
  }

}
