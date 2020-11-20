import React from "react"
import Moment from "react-moment"
import "./style.css"

function Table(props) {
    return (
        <div class="container">
        <table id="tableStyle" className="table">
            <thead>
                <tr>
                    <th></th>
                   <th  scope="col"> <button onClick={props.sortByFirstName}>Name</button></th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                </tr>
            </thead>
            <tbody>
            {props.results.map(result => (
                    <tr className="table" key={result.id.value}>
                        <td> <img src={result.picture.medium} alt="" /></td>
                        <td>{result.name.first + " " + result.name.last}  </td>
                        <td>{result.cell}</td>
                        <td className="email"><a href={result.email}>{result.email}</a></td>
                        <td><Moment format="MM/DD/YYYY">{result.dob.date}</Moment></td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    )
}

export default Table