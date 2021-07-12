import React from 'react';
import '../Firstpage/Second.css';


class Second extends React.Component{
 

render() {
   
    let lang=["Speak","Read","Write"];
    let apply=["Yes","No"]
        return(
            <div className="second">
              <br/><br/>
              <h5>Language Known</h5>
            <div className="info">
            <div className="Lang">
            <label>Languages:</label>
            <input type="text" />
            </div>
            
            
            <div className="checkbox">  
              {lang.map(result=>(
                <> <input type="checkbox" value={result} name="checkboxinput"/>
                {result}</>
              ))}
              </div>

          
            <br/><br/><br/>
            <div className="Lang"><input type="text"/></div>
            <div className="checkbox">  
              {lang.map(result=>(
                <> <input type="checkbox" value={result} name="checkboxinput"/>
                {result}</>
              ))}
              </div>

              <br/><br/><br/> <div className="Lang"><input type="text"/></div>
            <div className="checkbox">  
              {lang.map(result=>(
                <> <input type="checkbox" value={result} name="checkboxinput"/>
                {result}</>
              ))}
              </div>

              <br/><br/><br/>
              <div className="Lang"><input type="text"/></div>
            <div className="checkbox">  
              {lang.map(result=>(
                <> <input type="checkbox" value={result} name="checkboxinput"/>
                {result}</>
              ))}
              </div>
             <br/>
             <hr/>
             <br/>
             <br/>
             <br/>
            
             <br/>
             
            </div>
               
             <div className="apply">
              <label>Have you applied earlier?</label>
              
              <div className="radio">  
              {apply.map(result=>(
                <> <input type="radio" value={result} name="input"/>
                {result}</> ))} </div>
                <br/>
                <label>if yes.... When</label>
                <input type="text" style={{left:"10px"}}/>
                </div>
            <br/><br/>
            <div>
              <h5>Family Details</h5>
               <div className="tables">
              <table >
            <tr>
              <th>Relationship</th>
              <th>Name</th>
              <th>Date of Birth</th>
              <th>Qualification</th>
              <th>Occupation</th>
              <th>Blood Group</th>
            </tr>
            <br/>
            <tr className="row">
            <td>Father</td>
            <td><input type="text" className="row1"></input></td>
            <td><input type="date" name="date" id="date" className="form-control" placeholder="Enter Date" /></td>
            <td><input type="text"></input></td>
            <td><input type="text"></input></td>
            <td><input type="text"></input></td>
            </tr>
            <tr>
            <td>Mother</td>
            <td><input type="text"></input></td>
            <td><input type="date" name="date" id="date" className="form-control"  /></td>
            <td><input type="text"></input></td>
            <td><input type="text"></input></td>
            <td><input type="text"></input></td>
            </tr>
            <tr>
            <td>Spouse</td>
            <td><input type="text"></input></td>
            <td><input type="date" name="date" id="date" className="form-control" placeholder="Enter Date" /></td>
            <td><input type="text"></input></td>
            <td><input type="text"></input></td>
            <td><input type="text"></input></td>
            </tr>
            <tr>
            <td>Son/Daughter</td>
            <td><input type="text"></input></td>
            <td><input type="date" name="date" id="date" className="form-control" placeholder="Enter Date" /></td>
            <td><input type="text"></input></td>
            <td><input type="text"></input></td>
            <td><input type="text"></input></td>
            </tr>
            <tr>
            <td>Son/Daughter</td>
            <td><input type="text"></input></td>
            <td><input type="date" name="date" id="date" className="form-control" placeholder="Enter Date" /></td>
            <td><input type="text"></input></td>
            <td><input type="text"></input></td>
            <td><input type="text"></input></td>
            </tr>
            <tr>
            <td>Son/Daughter</td>
            <td><input type="text"></input></td>
            <td><input type="date" name="date" id="date"  /></td>
            <td><input type="text"></input></td>
            <td><input type="text"></input></td>
            <td><input type="text"></input></td>
            </tr>
          

          </table>
          </div>
            </div>
            <br/>
            <div className="edu">
              <h5>Education Qualification</h5>
              
              <div className="edu-inst">
              <h4>X std</h4>
               <br/><br/><label>Year Completed</label> 
                <input type="text" />
                <br /><br /><label>% of Marks</label> 
                <input type="text" />
                <br /><br /><label> Award/Rank if any</label> 
                <input type="text" />
                <br/><br/>
                <label>Upload Marksheet</label>
                <input type="file" className="edu-inst" style={{borderStyle:"none"}}></input>
             
                </div>


                <div className="edu-inst-1">
              <h4>XII std</h4>
              <label  style={{position: "relative",left: "186px",top: "-208px"}}>Year Completed</label>
               <input type="text" style={{position: "relative",left: "325px",top: "-208px"}}></input>
               <br/><br/>
               <label style={{position: "relative",left: "171px",top: "-221px"}}>% of Marks</label>
               <input type="text" style={{position: "relative",left: "344px",top: "-223px"}}></input>
               <br/><br/>
              
               <label style={{position: "relative",left: "201px",top: "-236px"}}>Award/Rank if any </label>
               <input style={{position: "relative",left: "312px",top: "-235px"}}></input>
               <br/><br/>
               <label style={{position: "relative",left: "196px",top: "-252px"}}>Upload Marksheet</label>
                <input type="file" style={{position: "relative",left: "313px",top: "-251px" , borderStyle:"none"}} ></input>
               
  
                </div>
        
                </div>

            </div> ); }}
export default Second;