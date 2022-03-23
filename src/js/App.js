import Component from './core/component.js';
import { $ } from './utils/selector.js';
import { ALL, COMPLETED, ACTIVE } from '../js/core/constances.js';

import CountContainer from './components/CountContainer.js';
import InputContainer from './components/InputContainer.js';
import TodoList from './components/TodoList.js';

export default class App extends Component {
  /*   todo = {
    content: "",
    isChecked: Boolean,
    progress: ACTIVE
  }
 */ constructor($target) {
    super();
    this.$target = $target;
    this.props = {
      count: 0,
      filter: ALL,
      todolist: [],
    };

    this.render();
  }

  render() {
    this.$target.innerHTML = `
    <h1>TODOS</h1>
    <div class="new-todo-input"></div>
    <main>
      <ul id="todo-list" class="todo-list"></ul>
      <div class="count-container" />
    </main>`;
    this.mounted();
  }
  mounted() {
    this.InputContainer = new InputContainer({
      $target: $('.new-todo-input'),
      addTodo: this.addTodo,
    });
    this.TodoList = new TodoList({
      $target: $('.todo-list'),
      delTodo: this.delTodo,
      setCheck: this.setCheck,
      editTodo: this.editTodo,
      props: this.props,
    });
    this.CountContainer = new CountContainer($('.count-container'), this.props);
  }
  //Todo 추가
  addTodo = (todo) => {
    this.setState({
      todolist: this.props.todolist.concat({
        content: todo,
        progress: ACTIVE,
      }),
    });
    this.count(this.props.filter);
  };
  //Todo 삭제
  delTodo = (content) => {
    const todolist = this.props.todolist;
    const idx = todolist.findIndex((todo) => todo.content === content);
    todolist.splice(idx, 1);
    this.setState(todolist);
    this.count(this.props.filter);
  };
  //Todo 내용 변경
  editTodo = ($event) => {
    const newContent = $event.target.value
    // const existing = 
    console.log()
    const todolist = this.props.todolist;
    const idx = todolist.findIndex((todo) => todo.content === newContent);
    console.log(idx);
    todolist[idx].content = newContent;
    this.setState(todolist);
  };
  //Todo 완료/미완료 변경
  setCheck = (content) => {
    const todolist = this.props.todolist;
    const idx = todolist.findIndex((todo) => todo.content === content);
    todolist[idx].progress =
      todolist[idx].progress == ACTIVE ? COMPLETED : ACTIVE;
    console.log(this.props.todolist[idx].progress);
    this.setState(todolist);
  };
  //필터 적용
  filter() {}
  //Todo 갯수 세기
  count = () => {
    this.CountContainer.count(this.props);
  };

  setState(nextState) {
    this.props = { ...this.props, ...nextState };
    this.render();
  }
}
