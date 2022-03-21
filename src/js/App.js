import Component from './core/component.js';
import { $ } from './utils/selector.js';
import { ALL, COMPLETED, ACTIVE } from '../js/core/constances.js';

import CountContainer from './components/CountContainer.js';
import InputContainer from './components/InputContainer.js';
import TodoList from './components/TodoList.js';

export default class App extends Component {
  constructor($target) {
    super();
    this.$target = $target;
    this.props = {
      count: 0,
      filter: ALL,
      todolist: [],
    };

    this.render();
    this.mounted();
  }

  //웹 접속시 최초 1회 기본 템플릿 생성
  render() {
    this.$target.innerHTML = `
    <h1>TODOS</h1>
    <div class="new-todo-input"></div>
    <main>
      <div class="count-container" />
    </main>`;
  }
  mounted() {
    this.InputContainer = new InputContainer({
      $target: $('.new-todo-input'),
      addTodo: this.addTodo,
    });
    this.TodoList = new TodoList({
      $target: $('main'),
      delTodo: this.delTodo,
      setCheck: this.setCheck,
      props: this.props,
    });
    this.CountContainer = new CountContainer($('.count-container'), this.props);
  }
  //Todo 추가
  addTodo = (todo) => {
    // this.TodoList.add($('.todo-list'), todo);
    this.count(this.props.filter);
    this.setState({ todolist: this.props.todolist.concat({ todo }) });
  };
  //Todo 삭제
  delTodo = ($target) => {
    console.log($target);
    this.TodoList.del($target);
    this.count(this.props.filter);
  };
  //Todo 내용 변경
  editTodo() {}
  //Todo 완료/미완료 변경
  setCheck = ($target) => {
    this.TodoList.check($target);
  };
  //필터 적용
  filter() {}
  //Todo 갯수 세기
  count(filter) {
    this.CountContainer.count(filter);
  }

  setState(nextState) {
    this.props = { ...this.props, ...nextState };
    this.render();
  }
}
