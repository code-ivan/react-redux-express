// @flow
import React from 'react'
import { NavLink } from 'react-router-dom'

export class Footer extends React.Component {
  
  render() {
    
    const styles = require('./Footer.scss')
  
    return (
      <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-5">
                        <a href="https://rangewell.com/" target="_blank">
                        <img src={'/assets/images/logo-w.png'} className={ styles.logo} />
                        </a>
                    </div>
                    {/* <div className="col-sm-2">
                        <ul>
                            <li>
                                About Rangewell
                            </li>
                            <li>
                                <a>Success stories</a>
                            </li>
                            <li>
                                <a>About us</a>
                            </li>
                            <li>
                                <a>Careers</a>
                            </li>
                            <li>
                                <NavLink to={ `/apply` }>Find funding</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-2">
                        <ul>
                            <li>
                                Resources
                            </li>
                            <li>
                                <NavLink to={ `/blog` }>Blog</NavLink>
                            </li>
                            <li>
                                <a>FAQ</a>
                            </li>
                            <li>
                                <a>Resource centre</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-2">
                        <ul>
                            <li>
                                Contact
                            </li>
                            <li>
                                <a>+44 (0)20 3637 4150</a>
                            </li>
                            <li>
                                <a>contact@rangewell.com</a>
                            </li>
                            <li>
                                <a>1 Fore Street<br/>London EC2Y 9DT</a>
                            </li>
                        </ul>
                    </div> */}
                </div>
                <div className={ styles.disclaimer}>
                    <p>
                    Rangewell helps UK firms and their advisors find, compare and apply for business finance. Rangewell only provide services to limited companies based in the UK. If you are not a limited company please do not apply for finance via this website. Rangewell do not provide finance ourselves, we introduce businesses to business finance providers based on what they tell us their financing requirements are as well as their what they tell us about their circumstances, future plans and creditworthiness. Terms and conditions apply and guarantees and Indemnities may be required by the finance providers we introduce.
                    </p>
                    <p>
                    Rangewell Limited is a registered company in England and Wales (Company Number 09362490). Our registered office address is 2 Union Square, Darlington DL1 1GL. Information Commissioner's Office Reference ZA097601. VAT number GB225118634. Rangewell is an appointed representative of MACCapital Limited (Company No. 01267885) which are authorised and regulated by the Financial Conduct Authority (FCA Registration 742543).
                    Our Head Office is based at 1 Fore Street, London, EC2Y 9DT.
                    </p>
                    <p>
                    Rangewell can be contacted by e-mail at <a href="mailto:contact@rangewell.com">contact@rangewell.com</a>.
                    </p>
                </div>
                <div className={styles.footerbottom}>
                    <div className="pull-left">
                        <a href="https://rangewell.com/terms" target="_blank">Terms & Conditions</a>
                        <a href="https://rangewell.com/privacy/" target="_blank">Privacy & Cookie Policy</a>
                    </div>                    
                    <div className="pull-right">
                        <a href="https://www.facebook.com/Rangewell/" target="_blank">
                            <i className="fa fa-facebook-square"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/9237192/" target="_blank">
                            <i className="fa fa-linkedin"></i>
                        </a>
                        <a href="https://twitter.com/Rangewell_UK" target="_blank">
                            <i className="fa fa-twitter"></i>
                        </a>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </footer>
    )
  }
}

Footer.displayName = 'Footer'

export default Footer
