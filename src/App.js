import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import "bootstrap/dist/css/bootstrap.min.css";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            items: [],
            id: uuidv4(),
            item: "",
            editItem: false
        };
    }

    handleChange = e => {
        this.setState({
            item: e.target.value
        });
    };
    handleSubmit = e => {
        const newItem = {
            id: this.state.id,
            title: this.state.item
        };
        const updatedItems = [...this.state.items, newItem];

        // Lưu danh sách updatedItems vào localstorage

        // 
        this.setState({
            items: updatedItems,
            item: "",
            id: uuidv4()
        });
    };
    clearList = () => {
        this.setState({
            items: [],
            id: uuidv4(),
            item: "",
            editItem: false
        });
    };
    handleDelete = id => {
        const filteredItems = this.state.items.filter(item => item.id !== id);
        this.setState({
            items: filteredItems
        });
    };
    handleEdit = id => {
        const filteredItems = this.state.items.filter(item => item.id !== id);
        const selectedItem = this.state.items.find(item => item.id === id);
        this.setState({
            items: filteredItems,
            item: selectedItem.title,
            id: id,
            editItem: true
        });
    };
    render() {
        return ( 
        <div className = "container" >
            <div className = "row" >
                <div className = "col-10 mx-auto col-md-8 mt-5" >
                    <ToDoInput 
                        item = { this.state.item }
                        handleChange = { this.handleChange }
                        handleSubmit = { this.handleSubmit }
                        editItem = { this.state.editItem }
                    />
                    <ToDoList 
                        items = { this.state.items } // lấy từ localstorage
                        clearList = { this.clearList }
                        handleDelete = { this.handleDelete }
                        handleEdit = { this.handleEdit }
                    />  
                </div>
            </div>  
        </div >
        );
    }
}
export default App;