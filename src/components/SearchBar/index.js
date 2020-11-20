import React from "react"
import "./style.css"


function SearchBar(props) {
    return (
      <div class="container">
      <div id="style" className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4">Employee Directory</h1>
            <p className="lead">Keep track of all your employees and their info!</p>
            <div className="input-group">
                <div className="input-group-prepend">
                </div>
                <input type="text" id="inputStyle" onChange={props.handleInputChange} placeholder="Search for Employees!"  className="InputGroup"/>
            </div>
        </div>
      <div>
            
      </div>
    </div>
    </div>
        
    )
}

export default SearchBar

