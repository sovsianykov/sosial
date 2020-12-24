import React from "react";

function Month(props) {
  return (
    <tr>
      <th className="monthMame">January</th>
      <td className="pay">
        <span>{props.pe}</span>
      </td>
      <td>
        <span>{props.dpe}</span>
      </td>
      <td>
        <span>{props.dbte}</span>
      </td>
      <td>
        <span>{props.vle}</span>
      </td>
      <td className="pay">
        <span>{props.we}</span>
      </td>
      <td>
        <span>{props.wpe}</span>
      </td>
      <td>
        <span>{props.wbte}</span>
      </td>
      <td>
        <span>{props.wle}</span>
      </td>
      <td className="pay">
        <span>{props.se}</span>
      </td>
      <td>
        <span>{props.spe}</span>
      </td>
      <td>
        <span>{props.sbte}</span>
      </td>
      <td>
        <span>{props.sle}</span>
      </td>
    </tr>
  );
}
export default Month;
