import React, { Component } from "react";
import Month from "./Components/Month";
import Year from "./Components/Year";
import "./App.css";

class App extends Component {
  state = {
    months: [
      {
        id: 1,
        completed: "false",
        name : "set new month",
        pe: "dbl click ",
        dpe: "dbl click ",
        dbte:"dbl click ",
        vle:"dbl click ",
        we: "dbl click ",
        wpe: "dbl click ",
        wbte: "dbl click ",
        wle: "dbl click ",
        se: "dbl click ",
        spe: "dbl click ",
        sbte: "dbl click ",
        sle: "dbl click ",
      }

    ],
    monthForYear : [
      {
        id: 1,
        completed: "false",
        name : "January",
        pe: "700",
        dpe: "45",
        dbte:'',
        vle: "12345",
        we: "t",
        wpe: "456",
        wbte: "20-1-2020",
        wle: "5",
        se: "600",
        spe: "888",
        sbte: "20-1-2020",
        sle: "6",
      }
    ]
  };
  editHandler = (event) => {
    document.querySelector('button ').className = 'active';
    let input = document.createElement("input");
    let cell = event.target;
    input.style.fontSize = "1.2rem";
    input.style.color = "red";
    input.style.border = "none";
    input.style.textAlign = "center";
    input.style.padding = " 10px 0";
    input.value = cell.textContent;
    cell.innerHTML = "";
    cell.appendChild(input);
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>Utility Bills</h1>

          <table  className='template'>
            <thead>
              <tr>
                <th rowSpan="2" colSpan="1">
                  monthes
                </th>
                <th colSpan="4">Electricity</th>
                <th colSpan="4">Water</th>
                <th colSpan="4">Head Of House</th>
              </tr>

              <tr>
                <th colSpan="1">pay</th>
                <th colSpan="1">debt</th>
                <th>date</th>
                <th>value</th>
                <th colSpan="1">pay</th>
                <th colSpan="1">debt</th>
                <th>date</th>
                <th>value</th>
                <th colSpan="1">pay</th>
                <th colSpan="1">debt</th>
                <th>date</th>
                <th>value</th>
              </tr>
            </thead>
            <tbody onClick={this.editHandler.bind(this)}>

              {this.state.months.map((month) => {
                return (
                  <Month
                    name = {month.name}
                    month={month}
                    pe={month.pe}
                    dpe={month.dpe}
                    dbte={month.dbte}
                    vle={month.vle}
                    we={month.we}
                    wpe={month.wpe}
                    wbte={month.wbte}
                    wle={month.wle}
                    se={month.se}
                    spe={month.spe}
                    sbte={month.sbte}
                    sle={month.sle}
                    key={month.id}
                  />
                );
              })}
            </tbody>
            </table>
            <table>
              <thead>
              <tr>
                <th colSpan= '13'>Year </th>

              </tr>
              </thead>


             <Year monthForYear = {this.state.monthForYear}/>


          </table>
          <div className="ButtonToolbar">
            <button className="mode">Set New Month</button>

            {/*<button className="save">SAVE CHANGES</button>*/}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
