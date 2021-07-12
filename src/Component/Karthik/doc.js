import React from 'react';
import logo from './logo.png'

import '../Karthik/doc.css';
import { NavLink } from 'react-router-dom';

function Doc(props) {
    return (
        <div className="Media">
      
            <div className="c_header">
                <img src={logo} alt="logo"></img>




                <div className="c_head">
                    <h1>Document Checklist</h1>
                </div>
            </div>


            <div>
                <div className="p_head">
                    <h5>(A) Photocopy of following documents (one Copy)</h5>
                </div>
                <div className="p_table">
                    <table>
                        <tr>
                            <td>1.</td>
                            <td>Date of Birth</td>
                            <td> <input type="checkbox" className="ip1" /></td>
                        </tr>
                        <tr>
                            <td>2.</td>
                            <td>Copy of pan Card or Acknowledgement Slip of Form 49, Applied for Pan No.</td>
                            <td> <input type="checkbox" className="ip1" /></td>
                        </tr>
                        <tr>
                            <td>3.</td>
                            <td>Copy of full set of offer Letter, self attested on all the pages.</td>
                            <td> <input type="checkbox" className="ip1" /></td>
                        </tr>
                    </table>
                </div>
           <br/><br/><br/><br/>
              <div className="p2">

                <div className="p_head">
                    <h5>(B) Photocopy of following documents (one Copy)</h5>
                </div>
                <div className="p2_table">
                    <h4 className="sub">4.Professional / Educational Certificate & Mark Sheets:<br /></h4>
                    <table className="dc-table">

                        <tr>
                            <td>a.</td>
                            <td> 10th std equivalent marks card and certificate</td>
                            <td> <input type="checkbox" className="ip2" /></td>
                        </tr>
                        <tr>
                            <td>b.</td>
                            <td>12th std, Diploma or equivalent mark sheets and certificate.</td>
                            <td> <input type="checkbox" className="ip2" /></td>
                        </tr>
                        <tr>
                            <td>c.</td>
                            <td>Graduation mark sheets and certificate</td>
                            <td> <input type="checkbox" className="ip2" /></td>
                        </tr>
                        <tr>
                            <td>d.</td>
                            <td>Post-graduation Certificate marks card and certificate</td>
                            <td> <input type="checkbox" className="ip2" /></td>
                        </tr>
                        <tr>
                            <td>e.</td>
                            <td> Other relevant education or skill certifications</td>
                            <td> <input type="checkbox" className="ip2" /></td>
                        </tr>
                        <br />


                        <tr>
                            <td>5.</td>
                            <td>Resignation/Relieving Letter from last two Employers (if applicable)</td>
                            <td> <input type="checkbox" className="ip2" /></td>
                        </tr>
                        <tr>
                            <td>6.</td>
                            <td> Experience Letter (s) form all your PAST employers including details of employment
                                (if applicable)</td>
                            <td> <input type="checkbox" className="ip2" /></td>
                        </tr>
                        <tr>
                            <td>7.</td>
                            <td>Latest Pay-slip / Salary Certificate form the last two employers (if applicable)</td>
                            <td> <input type="checkbox" className="ip2" /></td>
                        </tr>
                        <tr>
                            <td>8.</td>
                            <td>Permanents & current Residential address proof (Ration Card / Voter ID Card / Aadhar /
                                Passport / Licence Copy etc.,) </td>
                            <td> <input type="checkbox" className="ip2" /></td>
                        </tr>

                    </table>

                </div>
         <br/><br/><br/><br/> <br/><br/>
            <div className="p3">
                <div className="p_head">
                    <h5>(C) Two Passport Size Color Photocopy as per specification</h5>
                </div>
                <div className="p_table">
                    <table>
                        <tr>
                            <td>9.</td>
                            <td>COLOR PHOTOGRAPH with LIGHT BLUE BACKGROUND (Name & blood group to be
                                mentioned at the back of photographs).</td>
                            <td> <input type="checkbox" className="ip3" /></td>
                        </tr>

                    </table>
                </div>
            </div>
            <br/><br/><br/><br/>
            <div className="p4">
                <div className="p_head">
                    <h5>(D) OTHER INFORMATION (To be made available on date of joining)</h5>
                </div>
                <div className="p_table">
                    <table>
                        <tr>
                            <td>10.</td>
                            <td>Previous Employment PF Account No. and Pension Account No with address of Trust /
                                RPFC Office (In case joinees wish to Transfer their PF)</td>
                            <td> <input type="checkbox" className="ip4" /></td>
                        </tr>
                        <tr>
                            <td>11.</td>
                            <td>Joinees family (Parents Spouse, children) details including their DOB</td>
                            <td> <input type="checkbox" className="ip4" /></td>
                        </tr>
                        <tr>
                            <td>12.</td>
                            <td>Bank Account no. (AXIS) (if Any)</td>
                            <td> <input type="checkbox" className="ip4" /></td>
                        </tr>

                        <tr>
                            <td>13.</td>
                            <td>Blood Group of self and Family</td>
                            <td> <input type="checkbox" className="ip4" /></td>
                        </tr>


                    </table>
                </div>
            </div>
            </div>
            </div>
            <br/><br/><br/><br/>
  <div className="Next" style={{marginLeft:"0%"}}>
      <NavLink to='/First'>Next</NavLink>
  </div>
        </div>
    );
}

export default Doc;