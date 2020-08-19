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
          <div className="white-paper__header clearfix">
            <div className="pull-left">
              <h1>Modus Planning White Paper</h1>
            </div>
            <div className="pull-right">
              <a className="btn btn-default" href="/resources">
                Back
              </a>
            </div>
          </div>
          <h2>The Current State of Planning in a Growing Brand:</h2>
          <p>
            "Fragmented", "sporadic", "inconsistent", and "fragile" are the adjectives that principally describe the state of planning a growing brand in retail before Modus Planning. In the past, rapidly growing brands that relied on bottom-up models, in lieu of top-down statistical trends, were not given the tools they needed to properly scale this methodology. This white paper will examine the downstream cross-functional impacts that poor planning can levy throughout the business. It will also demonstrate how the continuous sales and operations planning (S&OP) ways-of-working, enabled by Modus Planning (Modus), can significantly elevate both a brand’s planning and executional efficiency.
          </p>

          <h3>Fragmented</h3>
          <p>
            "Spreadsheets, spreadsheets everywhere!" This is an actual gripe heard from a trade manager who lost track of the myriad of function-specific business-planning spreadsheets that her organization developed. Of course, these spreadsheets all accomplish virtually the same thing – bottom-up planning, but they are purpose built to tackle only one aspect of the business. For example, a supply chain analyst would build a demand plan, incorporating promotion planning from another spreadsheet, but the final output would only include expected case volume to produce. Details such as promotion spend, customer-specific plans and shopper marketing events would not be incorporated.
          </p>
          <p>
            A trade manager would have the same bottom-up methodology prepared, but his focus would be ensuring that trade spend is captured and that promotional activity is within a certain allocated budget as a proportion of sales.
          </p>
          <p>
            The sales team builds a promotion plan for their customers normalizing for the retailer’s margin requirements and the desired frequency of promotion occurrences. In most growing companies, this promotion plan undergoes a sort of "telephone game" in which the trade team or operations team is notified, but generally not both. The details of the plan often resort to a best-guess estimate and, due to the constraints of the team and workload, post-promotional analysis is rarely attempted.
          </p>
          <p>
            These separate spreadsheets, or trackers, are often not integrated and do not correspond with each other. This often leads to missed promotions which can result in inadequate supply production or inaccurate customer orders. Either way, it is highly likely that your product will go out of stock.
          </p>

          <h3>Sporadic</h3>
          <p>
            Conventional top-down planning methodologies at large multi-national organizations rely on monthly forecast reviews. Smaller companies and growing brands cannot afford to update their plans and reassess on only a monthly cadence for fear of acting too late. Planning sporadically also leads to missed details like new items, promotions, or increases in distribution as the organization does not habitually update the plan.
          </p>

          <h3>Inconsistent</h3>
          <p>
            Variable formatting, nomenclature and methodologies can obfuscate a clear bottom-up plan as spreadsheets used by trade do not align with those from supply chain. In this situation, the finance department likely employs inefficient means to translate and properly accrue for COGS and trade expenditures. This inconsistency could spell disaster such as missing an accrual on a deduction for a costly promotion, which can wreak havoc on the financial projections of a brand.
          </p>

          <h3>Fragile</h3>
          <p>
            For most brands operating in spreadsheets, a typo could lead to dire circumstances. For instance, a typo in a formula bar in which the incorrect unit-to-case conversion is entered, can cause hundreds of thousands of dollars in lost sales. Spreadsheets are fragile as they operate at the mercy of human error. Spreadsheets can be sufficient in some situations such as for rapid iteration on new concepts, however, they have no business being used as the central planning system for a growing brand.
          </p>

          <h2>The Current State of Executing a Growing Brand:</h2>
          <p>
            Superior cross-functional planning is the only way to prime your business for success. However, in today's competitive environment, it also takes world-class execution of your brand to succeed.
          </p>
          <p>
            Some of the following questions can help you gauge how well your brand understands its execution capabilities:
          </p>
          <ol>
            <li>
              Do you know when promotions are running on shelf and at what price point?
            </li>
            <li>
              Do you have a mechanism to understand if a promotion is active? 
            </li>
            <li>
              Do you know if the customer will have enough inventory to execute the promotion?
            </li>
            <li>
              Do you track if the customer is persistently placing inaccurate orders?
            </li>
            <li>
              Are you validating retailer deductions vs. the agreed upon rate?
            </li>
          </ol>
          <p>
            Exceptional planning leads to exceptional execution. With sub-standard planning practices, brands do not know how customer orders correlate to promotion plans. Without this knowledge, it is impossible for brands to take control of their supply chain and adequately advocate for themselves with distributors, direct customers and other upstream third-party partners.
          </p>

          <h2>
            Introducing Modus Planning – the Platform that Ties it All Together 
          </h2>
          <p>
            Modus Planning is purpose built to sit at the intersection of planning and execution, making bottom-up methods instantly more collaborative, insightful and actionable. Through Modus Planning, the entire organization, including Supply Chain, Sales, Trade Management, Finance and even Innovation is constantly aligned.
          </p>
          
          <h3>Supply Chain:</h3>
          <p>
            A growing brand needs to focus its efforts and resources on driving trial and repeat purchases on shelf. A demand plan must anticipate demand accurately enough to ensure the supply plan can cover it. Brands cannot grow if they are not on shelf.
          </p>
          <p>
            Secondly, excess funds tied up in inventory creation constitutes an inefficient working capital spend. At worst, this inventory can build to a point of spoilage, or money lost to obsolete goods. While no plan is perfect, it is critical to eliminate massive inventory builds and spoilage.
          </p>
          <p>
            Third, long-term capacity planning must be executed correctly for a brand to appropriately scale. While this is difficult to perfect, understanding all the building blocks of the plan at a granular level allows for proper due diligence when making vast financial investments into the supply chain.
          </p>
          <p>
            In a traditional top-down approach, the plan is driven by lagging indicators, such as what happened last period. Leading indicators such as market dynamics and competitive movement are often overlooked, meaning the lag time between an error occurring in the plan and the brand discovering and resolving said error could be quite significant and costly.
          </p>
          <p>
            Modus Planning focuses mainly on leading indicators, such as promotional plans and new SKU launches, and is consistently refined in real time as data becomes available. This results in a more accurate plan on a go-forward basis, strengthening the accuracy of the overall demand plan.
          </p>

          <h3>Sales:</h3>
          <p>
            Robust sales activity is critical as a growing brand expands. Though an extensive amount of work must go into acquiring new retailers, maintaining the relationship is equally as important. For a brand to be successful on shelf, the retailer must be successful as well. This involves constant monitoring of the brand’s performance, monitoring the retailer’s margin and vigilance to limit out-of-stocks.
          </p>
          <p>
            Gross sales targets are critical for any brand’s ongoing success but in the CPG industry, sales team members usually have to achieve these goals while simultaneously managing trade spend. If a retailer is performing poorly, it may be difficult for the sales department to dynamically understand why. Is it due to missed projections of baseline velocity? Are there certain products or product groups that are underperforming? Are promotion lifts accurate? Without the scan or shipment data and a continually managed “latest estimate” forecast, the root cause of the poor performance is not readily apparent. Since one cannot act on what one cannot measure, having a tight feedback loop with the plan is crucial to ensuring success for the sales’ department.
          </p>
          <p>
            Understanding all the financial implications of off-invoices, scans, manufacturer chargebacks, sales service agreements, slotting fees and other deductions can be a tremendously daunting task if not managed appropriately. As variables that are a part of the plan, Modus Planning merges these charges with the volume plan so that net sales and profitability on both the brand level and retailer level can be projected. Even if volume is high, if the retailer is not profitable, there is a high likelihood of losing the account. Similarly, if the retailer is suffering from damages and spoils, it behooves the sales department to actively reduce customer orders to shield from costly over-stock situations that can narrow the retailer’s margin. 
          </p>
          <p>
            This type of analysis is available in Modus Planning. The platform also offers capabilities to optimize promotion frequencies using the variables maintained on the retailer and promotion records. If the variables are maintained well, this can lead to wider retailer margins without overshooting the promotional spend budget.
          </p>
          
          <h3>Trade Promotion Management:</h3>
          <p>
            Trade promotion marketing spend is often the second largest expense on a retail brand’s income statement behind cost of goods sold. Such a substantial expenditure needs to be managed with precision; especially as larger competitors try to use their vast funds to bury potential competitors. The trade manager needs to focus on ensuring that the trade-rates are within budgeted parameters, while still reaching gross sales goals at the account-level. If these metrics are not tracked and properly accrued for, the company’s finance department will be impacted.
          </p>
          <p>
            Given that the fundamentals of trade promotion management are tracked at the retailer level, Modus Planning’s demand plan is a perfect foundation to overlay these costs and ensure that they are continually updated. Modus Planning’s scenario optimization function can be used to optimize trade spend to drive the highest gross sales while remaining within user-defined trade rates.
          </p>
          <p>
            Trade managers approve proposed promotions and serve as gatekeepers to ensure that company funds are allocated appropriately across accounts. Using the approval workflows in Modus, trade managers can allow relevant stakeholders to change promotion plans. Meanwhile, plan changes that incur incremental costs require an incremental approval step.
          </p>
          
          <h3>Finance</h3>
          <p>
            Through the Modus Trade Promotion Management module, price promotion scan rates and other deductions are projected. Accounts Payable departments can use these projections to “sense-check” deductions that are received from customers. If there is no sound deduction vetting process in place, the brand can accidentally pay for promotions that are deducted for in error or that are for an entirely different brand! Having tight payables controls using the spend projections furnished via Modus Planning is a foundational element for ensuring that the company is paying for what it should.
          </p>

          <h3>Innovation</h3>
          <p>
            New innovations are the lifeblood of the industry. However, growing brands need to be prudent when it comes to planning for new items and then eventually forecasting their sales prior to launch. Modus Planning can serve a vital role for this concept. Understanding the current performance of the portfolio by retailer can help hone the expected sell-through of other items. 
          </p>

          <h2>
            Modus Planning Ways of Working By Department:
          </h2>
          <p>
            When a brand employs a continuous sales and operations planning (S&OP) process with Modus Planning at its core, each department is responsible for updating and maintaining certain variables. This should serve as an example for how a company should model their ways of working to embrace a continuous planning situation. Continuous S&OP is effective since each stakeholder department has a vested interest in ensuring that the system is up-to-date. 
          </p>

          <h3>Supply Chain:</h3>
          <p>
            The supply chain and operations department includes a demand planner who focuses on ensuring that the demand plan is correct. Though the supply chain team may not be explicitly responsible for some of the variable entries, it is responsible for the overall process and ensuring that the respective departments are maintaining their variables appropriately.
          </p>
          <p>
            In terms of updating variables, the supply chain team is tasked with baseline velocity actualization and post-promotion analysis. Everything that has occurred should be analyzed as soon as possible so that the forecast can be refined.
          </p>
          <p>
            While considering baselines, the demand planner should reflect on the following before making changes due to scanned data volume:
          </p>
          <ol>
            <li>
              Did the customer run out of stock?
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
            The demand planner should be making these changes consistently with the release of new scan data, after vetting for the above situations. In the absence of new scan data, the data that is “closest to the register” should be used, which could be shipments from consignee distribution centers (DCs) to retail stores or the brand’s shipments to consignee DCs. 
          </p>
          <p>
            In addition to planning variables, the supply chain team should be responsible for ensuring that distribution center mapping is maintained correctly and the proper product/product-group variables are loaded in.
          </p>

          <h3>Sales:</h3>
          <p>
            The sales team works in Modus principally in two areas - the retailer record and the promotion calendar. On the retailer record, the sales team is primarily responsible for maintaining the distribution points. Distribution points are as follows:
          </p>
          <ul>
            <li>
              The distribution center that will supply the product to the retailer.
            </li>
            <li>
              The product.
            </li>
            <li>
              The product group.
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
              Confirmation level of the distribution point.
            </li>
          </ul>
          <p> 
            <i>Frequency:</i> imminently. The distribution points should be populated with the products that are planned to be presented to retailers. Once an acceptance occurs, the confirmation level should be changed to reflect the confirmation. 
          </p>
          <p> 
            On the promotion calendar, the sales team should be responsible for ensuring that promotion timing is correct. Where the trade team focuses on the depth and other details, the sales team needs to ensure that the plan is being adhered to.
          </p>

          <h3>Trade Marketing:</h3>
          <p>
            The trade marketing team serves as the keeper of the promotion plans. As promotions occur and the demand planning team refines the plan, the trade marketing team should examine the promotion plans as more information becomes available.
          </p>
          <p>
            The trade manager’s schedule is often dictated by the sales meeting calendar in which plan proposals need to be reviewed for the sales presentation. However, plan proposals should always be consulted when the demand planner wants to make a structural change to baselines or promotion lifts to ensure there were no other confounding factors that could have influenced the demand in a given week. 
          </p>
          <p>
            Finally, the trade marketing team is responsible for the forward outlook for seasonality that will be confirmed by demand planning.
          </p>

          <h3>Finance</h3>
          <p>
            Finance should always use Modus Planning to vet deductions that come in from retailers. Vetting these deductions should be a critical accounts payable function. When creating the P/L, deductions for outstanding promotions and other trade activities should always be accrued for to ensure that no surprises occur that could affect the financial outlook of the firm.
          </p>

          <h2>In Conclusion</h2>
          <p>
            Modus Planning offers an integrated cross-functional solution to both planning and executing a brand that simply sets the standard in the industry. By following the prescribed ways of working, in which all departments pull their weight in maintaining the data, a brand can confidently take control of their destiny and use facts and figures to manage their relationship with customers.
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
