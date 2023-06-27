import React from 'react'
import styles from "./topFooter.module.scss"

function TopFooter() {
  return (
    <div className={styles.TopFooter}>

      <div className={styles.footer_menu}>
        <h2>Cars</h2>
        <ul>
          <li><a href="https://www.turners.co.nz/Cars/how-to-buy/how-to-buy-old/" title="How to Buy">How to Buy</a></li>
          <li><a href="https://www.turners.co.nz/Cars/sell-your-car/" title="Sell Your Car">Sell Your Car</a></li>
          <li><a href="https://www.turners.co.nz/Finance/" title="Finance &amp; Insurance">Finance &amp; Insurance</a></li>
          <li><a href="https://www.turners.co.nz/Cars/Auctions/" title="Auctions &amp; Events">Auctions &amp; Events</a></li>
          <li><a href="https://www.turners.co.nz/Cars/how-to-buy/Buyer-and-Seller-Fees/" title="Buyer &amp; Seller Fees">Buyer &amp; Seller Fees</a></li>
          <li><a href="https://www.turners.co.nz/Vehicle-Sale-Price-History/" title="Vehicle Sale Price History Tool">Vehicle Sale Price History Tool</a></li>
          <li><a href="https://www.turners.co.nz/Cars/how-to-buy/Shipping-Costs/" title="Shipping Costs">Shipping Costs</a></li>
        </ul>
      </div>
      <div className={styles.footer_menu}>
        <h2>Finance &amp; Insurance</h2>
        <ul>
          <li><a href="https://www.turners.co.nz/Finance/" target="_top" title="Finance page">Finance Homepage</a></li>
          <li><a href="https://www.turners.co.nz/Finance/car--personal-finance/" title="Car &amp; Personal Finance">Car &amp; Personal Finance</a></li>
          <li><a href="https://www.turners.co.nz/Finance/" target="_top" title="Loan Calculator">Loan Calculator</a></li>
          <li><a href="https://www.turners.co.nz/Finance/motor-vehicle-insurance/" title="Finance page">Car Insurance</a></li>
          <li><a href="https://www.turners.co.nz/Finance/mechanical-breakdown-insurance/" title="Finance page">Mechanical Breakdown Insurance</a></li>
          <li><a href="https://www.turners.co.nz/Finance/General-Insurance/" title="General Insurances">General Insurances</a></li>
          <li><a href="https://www.turners.co.nz/Trucks-Machinery/Finance/">Trucks Finance</a></li>
          <li><a href="https://www.turners.co.nz/Finance/legal-information/" title="Financial Information">Financial Information</a></li>
        </ul>
      </div>
      <div className={styles.footer_menu}>
        <h2>Search For</h2>
        <ul>
          <li><a href="https://www.turners.co.nz/Cars/Used-Cars-for-Sale/" target="_top" title="Search for Cars">Cars</a></li>
          <li><a href="https://www.turners.co.nz/Trucks-Machinery/Used-Trucks-and-Machinery-for-Sale/" target="_top" title="Search for Trucks &amp; Machinery">Trucks &amp; Machinery</a></li>
          <li><a href="https://www.turners.co.nz/Damaged-Vehicles/Damaged-Cars-for-Sale/" target="_top" title="Search for Damaged &amp; End of Life Cars">Damaged &amp; End of Life Cars</a></li>
          <li><a href="https://www.turners.co.nz/boats-marine/Used-Boats-for-Sale/" target="_top" title="Search for Boats and Marine">Boats &amp; Marine</a></li>
          <li><a href="https://www.turners.co.nz/motorcycles-scooters/Used-Motorbikes-for-Sale/" target="_top" title="Search for Motorcycles">Motorcycles &amp; Scooters</a></li>
          <li><a href="https://www.turners.co.nz/General-Goods/Search/" target="_top" title="Search for General Goods">General Goods</a></li>
          <li><a href="https://www.turners.co.nz/buses-caravans/Used-Caravans-and-Motorhomes-for-Sale/" target="_top" title="Search for Buses, Caravans &amp; Motorhomes">Buses, Caravans &amp; Motorhomes</a></li>
          <li><a href="https://www.turners.co.nz/Company/Auction-Schedule/" target="_top" title="Auction Schedule">Turners Auction Schedule</a></li>
        </ul>
      </div>
      <div className={styles.footer_menu}>
        <h2>About Us</h2>
        <ul>
          <li><a href="https://www.turners.co.nz/Company/About-Us/Overview/">Overview</a></li>
          <li><a href="https://www.turners.co.nz/Company/Careers/turners-careers/">Turners Careers</a></li>
          <li><a href="https://www.turners.co.nz/Company/Terms-and-Conditions/terms-conditions/" title="See out Terms &amp; Conditions">Terms and Conditions</a></li>
          <li><a href="https://www.turners.co.nz/Company/Terms-and-Conditions/Privacy-Policy/">Privacy Policy</a></li>
          <li><a href="https://www.turners.co.nz/Turners-Live/" title="Learn about Turners Live">Turners Live</a></li>
          <li><a href="https://www.turners.co.nz/the-good-oil/" title="The Good Oil Blog">The Good Oil Blog</a></li>
          <li><a href="https://www.turners.co.nz/Company/email-alerts/email-alerts/">Email Alerts</a></li>
          <li><a href="https://www.turners.co.nz/Company/Contact-Us/">Contact Us</a></li>
        </ul>
      </div>

    </div>
  )
}

export default TopFooter