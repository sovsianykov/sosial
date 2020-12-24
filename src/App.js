import React, { Component } from "react";
import Month from "./Components/Month";
import "./App.css";

class App extends Component {
  state = {
    months: [
      {
        id: 1,
        completed: "false",
        pe: "780",
        dpe: "50",
        dbte: "20-1-2020",
        vle: "12345",
        we: "400",
        wpe: "35",
        wbte: "20-1-2020",
        wle: "5",
        se: "700",
        spe: "400",
        sbte: "20-1-2020",
        sle: "6",
      },
    ],
  };
  editHandler = (event) => {
    let input = document.createElement("input");
    let cell = event.target;
    input.style.fontSize = "24px";
    input.style.color = "red";
    input.style.border = "none";
    input.style.textAlign = "center";
    input.value = cell.textContent;
    cell.innerHTML = "";
    cell.appendChild(input);
    this.setState({
      months: [
        {
          id: 1,
          completed: "false",
          pe: input.value,
          dpe: "50",
          dbte: "20-1-2020",
          vle: "12345",
          we: "400",
          wpe: "35",
          wbte: "20-1-2020",
          wle: "5",
          se: "700",
          spe: "400",
          sbte: "20-1-2020",
          sle: "6",
        },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>Utility Bills</h1>
          <div className="ButtonToolbar"></div>
          <table>
            <thead>
              <tr>
                <th rowSpan="2" colSpan="1">
                  monthes
                </th>
                <th colSpan="4">Electricity</th>
                <th colSpan="4">Water</th>
                <th colSpan="4">Head State</th>
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
        </div>
      </div>
    );
  }
}
export default App;
