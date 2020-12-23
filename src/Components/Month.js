import React  from 'react';




function Month({month}) {

return (
    <tr>
        <th className="monthMame">January</th>
        <td>
            <input type="text" value={month.pe} />
        </td>
        <td>
            <input type="text" value={month} />
        </td>
        <td>
            <input type="date" value={month} />
        </td>
         <td>
            <input type="text" value={month} />
         </td>
        <td>
            <input type="text" value={month} />
        </td>
        <td>
            <input type="text" value={month} />
        </td>
        <td>
            <input type="date" value={month} />
        </td>
        <td>
            <input type="text" value={month} />
        </td>
        <td>
            <input type="text" value={month} />
        </td>
        <td>
            <input type="text" value={month} />
        </td>
        <td>
            <input type="date" value={month} />
        </td>
        <td>
            <input type="text" value={month} />
        </td>








    </tr>
  )
}
export default Month;


