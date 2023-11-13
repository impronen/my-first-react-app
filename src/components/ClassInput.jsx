/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { description: "Just some demo tasks", edit: false },
        { description: "Just some demo task 2", edit: false },
      ],
      inputVal: "",
      editVal: "",
      todoCount: 2,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEditMonitoring = this.handleEditMonitoring.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleEditMonitoring(e) {
    this.setState({ editVal: e.target.value });
  }



  handleSubmit(e) {
    e.preventDefault();
    this.setState(
      (state) => {
        const newTodos = [
          ...state.todos,
          { description: state.inputVal, edit: false },
        ];
        return {
          todos: newTodos,
          inputVal: "",
          editVal: "",
        };
      },
      () => {
        this.calculateTodoCount();
      }
    );
  }

  handleDelete(e) {
    const updateTodoList = this.state.todos.filter((item) => item !== e);
    this.setState({ todos: updateTodoList });
  }



  calculateTodoCount = () => {
    this.setState({ todoCount: this.state.todos.length });
  };

  handleEdit(todo) {
    const updatedTodos = this.state.todos.map((item) => {
      if (item === todo) {
        if (item.edit) {
          // Editing is true, update the item.description and set item.edit to false
          return {
            ...item,
            description: this.state.editVal,
            edit: false,
          };
        } else {
          // Item is not in edit mode, set edit to true and set editVal to item.description
          return {
            ...item,
            edit: true,
          };
        }
      } else {
        return item;
      }
    });
  
    this.setState({ todos: updatedTodos, editVal: todo.description }, () => {
      this.calculateTodoCount();
    });
  }
  
  

  render() {
    return (
      <section>
        {/* eslint-disable-next-line react/prop-types */}
        <h3>{this.props.name}</h3>
        {/* The input field to enter To-Do's */}
        <form onSubmit={this.handleSubmit}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        <h5>Number of todos: {this.state.todoCount}</h5>
        
        <ul>
          {this.state.todos.map((todo) => {
            let content;
            if (todo.edit) {
              content = (
                <input
                  type="text"
                  name="task-entry"
                  value={this.state.editVal}
                  onChange={this.handleEditMonitoring}
                />
              );
            } else {
              content = todo.description;
            }

            return (
              <li key={todo.description}>
                {content}
                <button onClick={() => this.handleDelete(todo)}>Delete</button>
                <button onClick={() => this.handleEdit(todo)}>Edit</button>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default ClassInput;
