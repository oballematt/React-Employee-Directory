import React, { Component } from "react"
import API from "../utils/API"
import Table from "./Table"

class Data extends Component {
    state = {
        employees: [],
        sortedEmployee: [],
        order: ""
    }

    componentDidMount() {
        API.getUsers().then(res => this.setState({
            employees: res.data.results,
            sortedEmployee: res.data.results
        })).catch(err => console.log(err))
    }

    sortByFirstName = () =>{
        const sorted = this.state.sortedEmployee
        if (this.state.order === "asc") {
            const sorting = sorted.sort((a,b) => (a.name.first > b.name.first) ? 1 : -1)
            this.setState({
                sortedEmployee: sorting,
                order: "desc"
            })
        } else {
            const sort = sorted.sort((a,b) => (a.name.first > b.name.first) ? -1 : 1)
            this.setState({
                sortedEmployee: sort,
                order: "asc"
            })
        }
    }
    
    render() {
        return (
            <div>
                <Table results={this.state.sortedEmployee}
                       sortByFirstName={this.sortByFirstName} 
                />
            </div>
        )
    }
}

export default Data