// import { extend } from 'jquery'
// import { render } from '@testing-library/react'
import React from 'react';
import logo from '../logo.png';
import '../Karthik/Navbar.css';
import { NavLink } from 'react-router-dom';
import nav1 from '../images/slide1.png';
import nav2 from '../images/HHF logo2.png';
import nav3 from '../images/1.png';
import nav4 from '../images/2.png'
import nav5 from '../images/GL.jpg';
import nav6 from '../images/AL.png';
import nav7 from '../images/HGS.jpeg';
import nav8 from '../images/HV.jpg';
import nav9 from '../images/Def.jpeg';
import nav10 from '../images/Found.jpeg';
import nav11 from '../images/Hinduja.jpeg';
import nav12 from '../images/3.png';
class Navbar extends  React.Component {
  render() {
      return(
          
          <div className="Navbar">
              <img src={logo} className="Navbar-logo" style={{left:"100px"}} alt="" />
              <div className="nav-link">
              <br/>
              <ul className ="nav-links">
            <li>
            <NavLink to="/" className="nav-link"> About Us</NavLink></li>

            <li>
            <NavLink to= "/Doc" className="nav-link">Document Checklist </NavLink>
            </li>
            <li>
            <NavLink to="/" className="nav-link">Contact</NavLink></li>
            <li>
            <NavLink to="/" className="nav-link" style={{marginRight:"150px "}}> Help</NavLink></li>
            

        </ul>
              </div>

           <div className="nav-pic">
               <img src={nav1} className="nav1" style={{marginTop:"225px",left:"0", width:"1575px",height:"560px"}} alt=""></img>
           </div>
           <br/><br/><br/><br/>
           <div className="nav-content">
           <div className="nav-img">
               <img src={nav2} className="nav2" style={{width:"350px",height:"250px",position:"absolute", top:"900px"}} alt=""></img>
               <img src={nav3} className="nav2" style={{marginTop:"90%", width:"570px",height:"250px",left:"125px", display:"inline-block"}} alt=""></img>
               <img src={nav4} className="nav2" style={{marginTop:"110%", width:"450px",height:"200px",left:"155px"}} alt=""></img>
               <img src={nav5} className="nav2" style={{marginTop:"135%", width:"155px",height:"110px"}} alt=""></img>
               <img src={nav6} className="nav2" style={{marginTop:"135%",marginLeft:"10%", width:"125px",height:"110px"}} alt=""></img>
               <img src={nav7} className="nav2" style={{marginTop:"145%", width:"155px",height:"92px"}} alt=""></img>
               <img src={nav8} className="nav2" style={{marginTop:"145%",marginLeft:"12%", width:"135px",height:"110px"}} alt=""></img>
               <img src={nav9} className="nav2" style={{marginTop:"155%", width:"135px",height:"90px"}} alt=""></img>
               <img src={nav10} className="nav2" style={{marginTop:"155%",marginLeft:"12%", width:"135px",height:"110px"}} alt=""></img>
               <img src={nav11} className="nav2" style={{marginTop:"165%",marginLeft:"5%", width:"135px",height:"120px"}} alt=""></img>
               <img src={nav12} className="nav2" style={{marginTop:"190%", width:"450px",height:"160px",left:"125px"}} alt=""></img>
               </div>
           </div>
           <div className="nav-par" >
              <div className="navp">
               <p style={{top:"15px"}}> <strong style={{fontSize:"30px",fontWeight:"bolder",color:"#1597bb"}}>About Us</strong><br/> <br/>Hinduja Housing Finance (HHF) is a part of the prestigious Hinduja Group, Registered 
and Certified by National Housing Bank, a part of RBI and was established on 15 
April, 2015. Hinduja Housing Finance was primarily formed to make the dreams 
of people to own a home come true. This is a professionally managed housing 
finance company with a pan-Indian presence.
We have a sound backbone and modern infrastructure to provide customers 
with efficient service and authorized share capital worth 150,000,000. We have 
designed customized solutions to cater to Residential, Real Estate and other 
financial intermediations.
Our goal is to promote a viable and cost effective housing finance system to 
effectively serve different income groups in various regions. Making home loans 
more convenient and easy is something we truly believe in.
Our robust network of branches is spread across the country to facilitate a seamless 
loan availing process. We have a strong team of experienced Home Finance 
professionals who provide a warm customer experience and doorstep service.
We ensure that the interest of all our key stakeholders – customers, shareholders, 
investors, bankers & employees are taken care of and consistently drive to 
increase value for them.</p><br/><br/>
<p> <strong style={{fontSize:"30px",fontWeight:"bolder",color:"#1597bb"}}>From the MD’s desk…</strong><br/> <br/>
I welcome you to HHF family!!<br/><br/>
We as an organizations have customer and employee as our main focus. Our 
process and actions will always be to achieve customer/employee delight.<br/>
We believe in total trust and fairness in all our actions Thus the fundamentals 
of this organization is built upon the <strong>mutual trust</strong> and <strong>fair treatment</strong> of its 
employees which will naturally help bringing the ‘care and concern’ for the 
well being of employees and involve you in every decision making process.<br/>
Our HR Philosophy will be to create an organization of transparency, openness, 
fairness, and work without fear or favour in all its dealings with high level of 
integrity and accountability.<br/>
Our focus will also be on enriching employee and beyond which will lead to 
have a perfect work-life balance.<br/>
I value your association with us as truly professional and that you can enrich 
your career path with bright prospects during your stint with us.<br/>
I take this opportunity to wish you All the very Best!! And a great career in HHF 
in the years to come<br/><br/>
With Best Wishes<br/><br/>
S Nagarajan</p><br/><br/>
<p><strong style={{fontSize:"30px",fontWeight:"bolder",color:"#1597bb"}}>Group Companies…</strong><br/> <br/></p>
<ul>
  <li>Ashok Leyland – Manufacturer of HCVs & Buses</li>
  <li>Gulf Oil – The Chemical Hub of the Group. Business Division include </li>
  <ul><li>Commercial Explosives</li>
  <li>Lubricants</li>
  <li>Mining & Infrastructure</li>
  <li>Specially Chemicals</li></ul>
  <li>Gulf Oil International – One of the largest Petroleum Companies in the UK</li>
  <li>Hinduja Bank Switzerland – founded as a finance company in 1978 and 
became a Swiss regulated bank in 1994</li>
<li>Hinduja Global solutions (formerly named HTMT Global Solutions) it 
provides outsourcing solutions including Back office processing, Contact 
Center, and Customized IT services to a global clientele comprising several 
Fortune 500 companies</li>
<li>Hindija TMT – IT Services, contact centre and Back Office processing solutions</li>
<li>Hindija TMT – IT Services, contact centre and Back Office processing solutions</li>
<li>Hindija TMT – IT Services, contact centre and Back Office processing solutions</li>
<li>Hinduja Foundries – Hinduja foundries is a five decades old, professionally 
managed company catering to the casting needs of the developing 
automobile OEMs in india</li>
<li>P D Hinduja Hospital – part of Hinduja Foundation</li></ul><br/><br/>
<p> <strong style={{fontSize:"30px",fontWeight:"bolder",color:"#1597bb"}}>About Hinduja Leyland Finance</strong><br/> <br/>
In similar lines to ALF, AFL will also be an asset financing NBFC and will advance 
loans for purchase of heavy duty commercial vehicles, medium duty 
commercial vehicles, used commercial vehicles, multi utility vehicles, LCVs 
construction equipments, and three wheelers<br/><br/>
In the long term HLF portfolio on AL vehicles will not exceed 15% of private sector 
sales of AL – To leave ample scope for other financiers to support AL products.<br/><br/>
HLF will have diversified portfolio – strive to have a multiproduct (non competing) 
portfolio to spread the risk and for better credit quality. AL’s product funding to 
be always around 50% of the total portfolio<br/><br/>
Business (servicing) to be carried out with own resources oriented towards 
cultivating nurturing customer relationship – key activities like business 
development, credit appraisal and collection shall not be outsourced<br/><br/>
The setup of the organization is based on the hub and spoke model wherein for 
every 8 locations; there will be a Hub to manage the business from these locations<br/><br/>
HLF will also be the preferred financier for the products manufactured through 
the recent JV of Ashok Leyland <br/><br/>
The company is planning to do business with a PAN india presence and to 
have a net outstanding of 3000 crores by the end of 3rd financial year
</p><br/><br/>

</div>

</div>













             
          </div>
      );
  }
}
export default Navbar;