import React from "react"


function SearchBar(props) {
    return (
        
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <button class="btn btn-outline-secondary" type="button" id="button-addon1">Search</button>
            </div>
            <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
        </div>
        
    )
}

export default SearchBar