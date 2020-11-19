import React, { Component } from "react"
import API from "../utils/API"
import Table from "./Table"

class Data extends Component{
    state = {
        employees :[]
    }

    componentDidMount(){
        API.getUsers().then(res => this.setState({
            employees: res.data.results
        })).catch(err => console.log(err))
    
    }

    render() {
        return(
            <div>
                <Table results={this.state.employees} />
            </div>
        )
    }
}

export default Data