import React from "react";
import Month from "./Month";


function Year({monthForYear}) {
    return (
        <tbody className= 'Yearcell'    >
            { monthForYear.map( month => {
               return (
                   <Month n = { month.monthForYear }
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
               )
            }) }
        </tbody>
    );
}
export default Year;
