import React, { Component } from 'react';
import Month from "./Components/Month";
import './App.css';

class App extends Component {
   state = {
       months : [ { id: 1 , completed: 'false',
           pe:'780', dpe: '50', dbte:'20-1-2020', vle:'12345',
           we:'400', wpe: '35', wbte:'20-1-2020', wle:'5',
           se:'700', spe: '400', sbte:'20-1-2020', sle:'6'
       }
       ]
   }




  render() {
    return (
        <div className= "App">
          <div className="container">
            <h1>Utility Bills</h1>

            <table>
                <thead>

                <tr>
                    <th rowSpan="2" colSpan='1'>monthes</th>
              <th  colSpan="4">Electricity</th>
              <th colSpan="4">Water</th>
              <th colSpan="4">Head State</th>
                </tr>

                <tr>
                    <th  colSpan='1'>pay</th>
                    <th colSpan='1'>debt</th>
                    <th>date</th>
                    <th>value</th>
                    <th colSpan='1'>pay</th>
                    <th colSpan='1'>debt</th>
                    <th>date</th>
                    <th>value</th>
                    <th colSpan='1'>pay</th>
                    <th colSpan='1'>debt</th>
                    <th>date</th>
                    <th>value</th>

                </tr>
                </thead>
                <tbody>

                    {this.state.months.map(month => {
                        return <Month month = {month }
                                      pe = {month.pe }
                                      dpe = { month.dpe}
                                      dbte = { month.dbte}
                                      vle = { month.vle}
                                      we = {month.we }
                                      wpe = { month.wpe}
                                      wbte = { month.wbte}
                                      wle = { month.wle}
                                      se = {month.se }
                                      spe = { month.spe}
                                      sbte = { month.sbte}
                                      sle = { month.sle}
                                      key = {month.id }
                        />
                    })}



                </tbody>
            </table>



          </div>



        </div>






    )
  }
}
export default App;
