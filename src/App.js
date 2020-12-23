import React, { Component } from 'react';
import Month from "./Components/Month";
import './App.css';

class App extends Component {
   state = {
       months : [ { id:1, completed: 'false',
           pe:'', dpe: '', dbte:'', vle:'',
           we:'', wpe: '', wbte:'', wle:'',
           se:'', spe: '', sbte:'', sle:''
       }
       ]
   }


  render() {
    return (
        <div className= "App">
          <div className="container">
            <h1>Social payments </h1>

            <table>
                <tr>
                    <th rowSpan="2" colSpan='1'>monthes</th>
              <th  colSpan="4">Electricity</th>
              <th colSpan="4">Water</th>
              <th colSpan="4">Head State</th>
                </tr>
                <tr>
                    <th colSpan='1'>pay</th>
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

                    {this.state.months.map(month => {
                        return <Month month = {month }
                        />
                    })}




            </table>



          </div>



        </div>






    )
  }
}
export default App;
