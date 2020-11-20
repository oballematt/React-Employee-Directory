import React from "react"


function SearchBar(props) {
    return (
        <div>
        <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">Search for employees!</span>
        </div>
        <input type="text" onChange={props.handleInputChange}  class="form-control"/>
       
      </div>
      </div>
        
    )
}

export default SearchBar

