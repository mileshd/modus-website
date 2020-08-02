import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import './white-paper.css'

const WhitePaperPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Modus Planning White Paper" />
      <div className="white-paper">
        <div className="container">
          <h1>Modus Planning White Paper</h1>
          <h2>The Current State of Planning in a Growing Brand:</h2>
          <p>
            "Fragmented", "sporadic", "inconsistent", and "fragile" are the adjectives that principally describe the state of planning a growing brand in retail before Modus Planning. In the past, rapidly growing brands, expanding in distribution and sales velocity, that must rely on bottoms-up models in lieu of top-down statistical trends, were not given the tools they need to properly scale this methodology. This white paper will examine the downstream cross-functional impacts that poor planning can levy throughout the business and how the Continuous S&OP way-of-working, enabled by Modus Planning can significantly elevate both a brand’s planning and executional efficiency. 
          </p>

          <h3>Fragmented</h3>
          <p>
            "Spreadsheets, spreadsheets everywhere!" This is an actual gripe heard from a trade manager who lost track of the myriad of function-specific business-planning spreadsheets that her organization developed. Of course, these spreadsheets all accomplish virtually the same thing – bottoms-up planning, but they are purpose built to tackle only one aspect of the business. For example, a supply chain analyst would build out a demand plan, incorporating promotion planning from another spreadsheet, but at the end of it, the output was a plan of expected case volume to produce. Details such as promotion spend, customer-specific plans, shopper marketing events would not be incorporated at all. 
          </p>
          <p>
            A trade manager would have the same bottoms-up methodology built out, but on his team, the focus is ensuring that trade spend is captured and that the promotional activity falls in a certain allocated budget as a proportion of sales. 
          </p>
          <p>
            The sales team builds a promotion plan for their customers based off a retailer’s margin requirements as well as a desired frequency. In most growing companies, this promotion plan undergoes a sort of "telephone game" in which trade is notified and/or operations is notified. The details of the plan often resolve to a "finger in the wind" estimate and, due to the constraints of the team and workload, post-promotional analysis is rarely done.
          </p>
          <p>
            These separate spreadsheets or trackers are often not integrated and do not speak to each other. This often leads to promotions being missed meaning that either no supply was produced, or the customer did not order for the promotion. In either instance, your brand will go out of stock.
          </p>

          <h3>Sporadic</h3>
          <p>
            Conventional top-down planning methodologies at large multi-national organizations rely on monthly forecast reviews. Given the scale of their business, one promotion may or may not even be a blip in the supply plan. Smaller companies and growing brands cannot afford to update their plans and reassess on a monthly cadence for fear of acting too late. Planning sporadically also leads to missed details like new items, promotions, or increases in distribution as the organization is not in a habit of continuously updating the plan. 
          </p>

          <h3>Inconsistent</h3>
          <p>
            Variable formatting, nomenclature, and methodologies can obfuscate a clear bottoms-up plan as the spreadsheets used by trade do not align with those from supply chain. In this situation, Finance likely needs work-arounds to translate and properly accrue for COGS and trade expenditures. This inconsistency easily leads to a deduction for a major promotion not being accrued for, which can wreak havoc on the books and financial projections of a brand.
          </p>

          <h3>Fragile</h3>
          <p>
            A single typo in a formula bar in which the incorrect unit to case conversion is entered can cause tens if not potentially hundreds of thousands of dollars in lost sales. Spreadsheets are at their core fragile as they operate at the whims of human error. Spreadsheets are fantastic for rapid iteration on new concepts, however; they have no business being used as the central planning system for a growing brand.   
          </p>

          <h2>The Current State of Executing a Growing Brand:</h2>
          <p>
            Excellence in cross-functional planning is a fantastic way to prime your business for success, however; in today's competitive environment, it also takes world-class execution of your brand to succeed.
          </p>
          <p>
            In the <i>"OnePage Business Planning & Execution Maturity Model"</i> we ask some of the following questions to gauge how far a brand understands its execution capabilities:
          </p>
          <ol>
            <li>
              Do you know the exact dates promotions are running on shelf? Price point? 
            </li>
            <li>
              Do you have a mechanism to understand if a promotion is active? 
            </li>
            <li>
              Do you know if the customer will have enough inventory to execute the promotion?
            </li>
            <li>
              Do you know or track if the customer is persistently ordering too much or too little?
            </li>
            <li>
              Are you validating deductions that come through from retailers vs. the agreed upon rate?
            </li>
          </ol>
          <p>
            Having an excellence in planning is a prerequisite for excellence in execution. For example, with sub-standard planning practices, brands cannot not know how customer orders correlate to promotion plans, without this knowledge, it is impossible for brands to take control of their destiny and adequately advocate for themselves with distributors / direct customers / and other upstream third-party partners.  
          </p>

          <h2>
            Introducing Modus Planning – the Platform that Ties it All Together 
          </h2>
          <p>
            Modus Planning is purpose built to sit at the intersection of planning and execution of a business, making bottoms-up planning instantly more collaborative, insightful, and actionable. Through Modus Planning, the entire organization, including Supply Chain, Sales, Trade Management, Finance, and even Innovation is constantly aligned, which leads to excellence in both planning and execution.
          </p>
          
          <h3>Supply Chain:</h3>
          <p>
            A growing brand needs to focus its efforts and resources on driving trial and repeat on shelf. The first thing a demand plan should accomplish is the ability to anticipate demand accurately enough to ensure the supply plan can cover it. Brands cannot grow if they are not on shelf. 
          </p>
          <p>
            Secondly, Funds tied up in inventory creation are not adding value but being used to hedge against a sub-standard plan. At worst, this inventory can build to a point of spoilage, in which is money lost in obsolete goods. While no plan is perfect, the tolerance can be tightened to eliminate massive inventory builds and spoilage.
          </p>
          <p>
            Third, long-term capacity planning is critical to execute correctly for a brand to appropriately scale. While this is very difficult to get right at a 6 to 36-month time horizon, understanding all the building blocks of the plan at a granular level, only serves to improve the plan to allow diligence when making major financial investments into the supply chain.
          </p>
          <p>
            In a traditional top-down approach, the plan is driven by lagging indicators, such as what happened last period. Leading indicators such as market dynamics and competitive movement are often overlooked, meaning the lag time between error occurring in the plan and the plan recalculating can be quite significant and costly.
          </p>
          <p>
            Modus Planning focuses mainly on leading indicators such as promotional plans and new SKU launches, consistently being refined in near real time as more data is added. This allows a more accurate plan on a go-forward basis, strengthening the accuracy of the overall demand plan.
          </p>

          <h3>Sales:</h3>
          <p>
            Sales is essential – especially as a growing brand is trying to make a case for its existence. Though a massive amount of work must go in to preparing a sales presentation to retailer category managers, an acceptance means the work is just beginning. For a brand to be successful at a retailer, the retailer must be successful as well. This involves constant monitoring of the brand’s performance, monitoring of the retailer’s margin, and vigilance on out-of-stocks. 
          </p>
          <p>
            Normally, gross sales targets are set at the outset of a year, ideally by customer account – it is up to Sales to realize these gross sales ambitions while simultaneously managing trade spend. If a customer is lagging, it can be difficult for the Sales department to dynamically understand the greatest drivers of miss to the plan. If the Sales department’s attention is given to a retailer that is struggling, it is critical to add another layer of granularity to understand why. Is it baseline velocity? By what product group or product? Is it promotion lifts? Is it promotion plan fidelity? Without the scan or shipment data and a continually managed “latest estimate” forecast, the root cause of the miss is not readily apparent. Since one cannot act on what one cannot measure, having a tight feedback loop with the plan is a critical component of Sales’ success. 
          </p>
          <p>
            Understanding all the financial implications of off-invoices, scans, manufacturer charge backs, sales service agreements, slotting fees, and other deductions can be a tremendously daunting task if not managed appropriately. As variables that are a part of the plan, Modus Planning merges these charges with the volume plan so that net sales and profitability on both the brand-level as well as the retailer level can be projected. Though volume might be high, if the retailer is losing money, there is a good chance that the next category review might not be so kind. Similarly, if the retailer is suffering from damages and spoils, it behooves Sales to actively reduce customer orders to shield from costly over-stock situations that can hit the retailer’s margin and create poorly coded product on shelf. 
          </p>
          <p>
            These functions and more are available in Modus Planning. Further, the platform also offers capabilities to optimize promotion frequencies using the variables maintained on the retailer and promotion records. If the variables are maintained well, this can drive excellent retailer margin while staying in budget.
          </p>
          
          <h3>Trade Promotion Management:</h3>
          <p>
            Trade promotion marketing spend is often the second largest budget in a retail brand’s P/L behind cost of goods sold. Such a major component needs to be managed precisely; especially as larger competitors try to use their vast funds to bury potential competitors. The trade manager needs to be completely focused on ensuring that the trade-rates are within budgeted parameters, while still hitting gross sales goals at the account-level. If these metrics are not tracked and properly accrued for, the company’s finance department will be impacted.
          </p>
          <p>
            Given that the fundamentals of trade promotion management are at the retailer’s shelf level, Modus Planning’s demand plan is a perfect foundation to overlay these costs and ensure that they are continually updated. Modus’ scenario optimization function is a powerful tool to optimize trade spend to drive the highest gross sales number while remaining within certain trade rates. 
          </p>
          <p>
            Trade managers also play a significant role in approvals of proposed promotions and serve as gatekeepers to ensure that the companies funds are allocated appropriately across accounts. Using the approval workflows in Modus, trade managers can allow account executives or brokers to change promotion windows, while other details and promotion duration changes that cost incremental money go through an approval step.
          </p>
          
          <h3>Finance</h3>
          <p>
            Through the Modus Trade Management Module, price promotion scan rates and other deductions are projected. Accounts Payable departments can use these projections to sense-check vs. deductions that are received from customers. If there is no solid deduction vetting process in place, the brand can accidentally pay for promotions that are deducted for in error or that are for an entirely different brand! Having tight payables controls using the spend projections furnished via Modus Planning is a foundational element for ensuring that the company is paying for what it should.
          </p>

          <h3>Innovation</h3>
          <p>
            New innovations are the lifeblood of the industry, however; growing brands need to be very prudent when it comes to planning the business case for new items and then eventually forecasting their sales prior to launch. Modus Planning can serve a central role in this business case building. Understanding the current performance of the portfolio by retailer can help hone the expected sell-through of other items. Additionally, as new items hit the shelves, Modus’ ability to forecast customer pipe-ins signals the need to operations, allowing flawless execution.  
          </p>

          <h2>
            Modus Planning Ways of Working By Department:
          </h2>
          <p>
            In “Continuous S&OP Fueled by Modus Planning,” each department is responsible for updating and maintaining certain variables. No company is the same, however; this should serve as a loose scaffold for how a company should model their ways of working to embrace a continuous planning situation. “Continuous Sales and Operations Planning” works since each stakeholder department has a vested interest in ensuring that the system is as up-to-date as possible.
          </p>

          <h3>Supply Chain:</h3>
          <p>
            The Supply Chain and Operations department includes a demand planner who focuses on ensuring that the plan is correct. Though Supply Chain may not be explicitly responsible some of the variable entries, Supply Chain is responsible for the overall process and ensuring that the respective departments are maintaining their variables appropriately. 
          </p>
          <p>
            In terms of updating variables, the supply chain team is tasked with baseline velocity actualization and post-promotion analysis. Everything that has occurred should be analyzed as soon as possible so that the forecast can be refined. 
          </p>
          <p>
            While looking at baselines, the demand planner should consider the following before making baseline changes based on scan data:
          </p>
          <ol>
            <li>
              Was enough product supplied to the customer – in other words, did the customer run out of stock?
            </li>
            <li>
              Was distribution in line with expectations? 
            </li>
            <li>
              Was pricing in line with the forecast? 
            </li>
            <li>
              Were any shopper marketing activities such as couponing running that could have affected the baselines but not average price?
            </li>
            <li>
              Was there competitive activity that could have suppressed baselines? 
            </li>
          </ol>
          <p>
            The demand planner should be making these changes consistently with the release of new scan data. In the absence of new scan data, the bottoms-up distribution points should be maintained as patterns form in shipment data either from consignee DCs to stores or the company’s shipments to consignee DCs, the data that is “closest to the register” should be used.
          </p>
          <p>
            In addition to planning variables, supply chain should be responsible for ensuring that distribution center mapping is maintained correctly and the proper product/product-group variables are loaded in.  
          </p>

          <h3>Sales:</h3>
          <p>
            Sales works in Modus principally in two areas, the retailer record, and the promotion calendar. On the retailer record, Sales is responsible for maintaining the costs that the retailer will deduct along with the distribution points. Distribution points are: 
          </p>
          <ul>
            <li>
              The distribution center that will supply the product to the retailer.
            </li>
            <li>
              The product’s product group.
            </li>
            <li>
              The product.
            </li>
            <li>
              The anticipated product start date on shelf.
            </li>
            <li>
              The number of stores anticipated to carry the product.
            </li>
            <li>
              The average units per store per week that those stores will sell.
            </li>
            <li>
              The average units per store per week that those stores will sell.
            </li>
            <li>
              Confirmation level of the distribution point.
            </li>
          </ul>
          <p> 
            <i>Frequency:</i> As soon as learned – Going into a meeting, the distribution points should be populated with the products that are planned to be presented. Once an acceptance occurs, the confirmation level should be changed to reflect the confirmation. 
          </p>
          <p> 
            On the promotion calendar, Sales should be responsible for ensuring that promotion timing is correct. Where Trade Management focuses on the depth and other details, Sales needs to ensure that the plan is being stuck to. 
          </p>

          <h3>Trade Marketing:</h3>
            <p>
              Trade management serves as the keeper of the promotion plans, approving plans, optimizing etc. As promotions occur, and demand planning refines the plan, trade management should be iterating on the plans as more information is loaded in and promotion default values are refined. 
            </p>
            <p>
              The trade manager’s schedule is often dictated by the sales meeting calendar in which plan proposals need to be firmed up for the presentation, however; they should always be consulted when the demand planner wants to make a structural change to baselines or promotion lifts to ensure there were no other confounding factors that could have influenced the demand in a given week. Additionally, Trade Marketing is responsible for the forward outlook for seasonality that will be confirmed by demand planning.
            </p>

          <h3>Finance</h3>
          <p>
            Finance should always use Modus Planning when deductions come in from retailers – vetting these deductions should be a critical accounts payable function. Additionally, when creating the P/L, deductions for outstanding promotions and other trade activities should always be accrued for to ensure that no surprises occur that could affect the financial outlook of the firm. 
          </p>

          <h2>In Conclusion</h2>
          <p>
            Modus Planning offers an integrated cross-functional solution to both planning and executing a brand that simply sets the standard for how it’s done. By following the prescribed ways of working, in which all departments pull their weight in maintaining the data, a brand can confidently take control of their destiny and use facts and figures to promote their relationship with customers.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default WhitePaperPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
