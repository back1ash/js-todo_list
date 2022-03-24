import TodoInput from './components/TodoInput.js';
import TodoList from './components/TodoList.js';
import Counter from './components/Counter.js';
import { $ } from './utils/Selectors.js';

export default class App {
  constructor($target) {
    this.$target = $target;
    this.state = {
      idx: -1,
      filter: 'all ',
      todoList: [
        // {
        //   id: 0,
        //   title: 'asdas',
        //   isChecked: true,
        // },
      ],
    };

    this.render();
  }

  render() {
    this.$target.innerHTML = `
    <h1>TODOS</h1>
    <div class="todo-input"></div>
    <main>
      <ul id="todo-list" class="todo-list"></ul>
      <div class="count-container"></div>
    </main>
    `;
    this.mounted();
  }

  mounted() {
    this.TodoInput = new TodoInput({
      $target: $('.todo-input'),
      addTodo: this.addTodo,
    });
    this.TodoList = new TodoList({
      $target: $('.todo-list'),
      state: this.state,
      checkTodo: this.checkTodo,
      delTodo: this.delTodo,
      editTodo: this.editTodo,
    });
    this.Counter = new Counter({
      $target: $('.count-container'),
      state: this.state,
      setFilter: this.setFilter,
    });
  }

  addTodo = (todo) => {
    this.setState({
      todoList: this.state.todoList.concat({
        id: ++this.state.idx,
        title: todo,
        isChecked: false,
      }),
    });
  };

  delTodo = (id) => {
    this.setState({
      todoList: this.state.todoList.filter((todo) => todo.id != id),
    });
  };

  editTodo = (id, newTitle) => {
    this.setState(
      this.state.todoList.filter((todo) => {
        if (todo.id == id) {
          todo.title = newTitle;
        }
        return todo;
      })
    );
  };

  checkTodo = (id) => {
    this.setState(
      this.state.todoList.filter((todo) => {
        if (todo.id == id) {
          todo.isChecked = todo.isChecked ? false : true;
        }
        return todo;
      })
    );
  };

  setFilter = (newFilter) => {
    this.setState({ filter: newFilter });
  };

  setState = (nextState) => {
    this.state = { ...this.state, ...nextState };
    this.render();
  };
}
