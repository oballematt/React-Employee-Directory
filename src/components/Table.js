import React from "react"
import Moment from "react-moment"

function Table(props) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th></th>
                    <th onClick={props.sortByFirstName} scope="col">Name</th>
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
    )
}

export default Table