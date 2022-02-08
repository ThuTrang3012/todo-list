import React, { Component } from "react";

export default class ToDoItem extends Component {
    render() {
        const { title, handleDelete, handleEdit, checkEdit } = this.props;
        return ( 
            <li className = "list-group-item text-capitalize d-flex justify-content-between my-2" >
                {/* <div>
                    icon
                </div> */}
                {false ? (
                <div>
                    <input
                        type = "text"
                        className = "form-control text-capitalize"
                        placeholder = "add todo item"
                        value = { title }
                    />
                </div>
                ) : (
                <div onDoubleClick={() => {
                    console.log('click')
                }}>
                    <h6> { title } </h6>  
                    <div className = "todo-icon" >
                        <span className = "mx-2 text-success"
                            onClick = { handleEdit } >
                            <i className = "far fa-pen" > </i> 
                        </span>  
                        < span className = "mx-2 text-danger"
                            onClick = { handleDelete } >
                            < i className = "fas fa-trash" > </i>
                        </span>  
                    </div> 
                </div>
                )}
                 
            </li>
        );
    }
}