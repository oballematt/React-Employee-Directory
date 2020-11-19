import React, { Component } from "react"
import SearchBar from "./SearchBar"
import API from "../utils/API"
import Table from "./Table"

class Data extends Component {
    state = {
        search: "",
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

    handleInputChange(event){
       const employees = this.state.employees
       const userInput = event.data.target
       const searchEmployee = employees.filter(employee => employee.name.first.toLowerCase().indexOf(userInput.toLowerCase()) > -1)
       this.setState({
           searchEmployee
       })
    }

    handleEmployeeSearch(event){
        event.preventDefault()
        if(!this.state.search){
            alert("Please enter a name")
        }
        const searchedEmployee = this.state.employees.filter(employee => employee.name.first.toLowerCase().includes(this.state.search.toLocaleLowerCase()))
        this.setState({
            searchedEmployee
        })
    }
    
    render() {
        return (
            <div>
                <SearchBar
                  employee={this.state.employees}
                  handleEmployeeSearch={this.handleEmployeeSearch}
                  handleInputChange={this.handleInputChange} />
                <Table results={this.state.sortedEmployee}
                       sortByFirstName={this.sortByFirstName} 
                />
            </div>
        )
    }
}

export default Data