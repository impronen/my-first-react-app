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
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleEditChange(e) {
    this.setState((state) => ({
      ...state,
      editVal: e.target.value,
    }));
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
    const todoFromState = this.state.todos.map((item) => {
      if (item === todo) {
        if (item.edit) {
          // Editing is true so this is for getting back from the edit mode
        } else {
        }
      }
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
        {/* The list of all the To-Do's, displayed */}
        <ul>
          {this.state.todos.map((todo) => {
            let content;
            if (todo.edit) {
              content = (
                <input
                  type="text"
                  name="task-entry"
                  value={this.state.editVal}
                  onChange={this.handleEditChange}
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
