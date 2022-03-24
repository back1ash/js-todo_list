import { $ } from '../utils/Selectors.js';

export default class TodoInput {
  constructor({ $target, addTodo }) {
    this.$target = $target;
    this.addTodo = addTodo;

    this.render();
    this.setEventListener();
  }
  render() {
    this.$target.innerHTML = `
    <input
      id="new-todo-title"
      class="new-todo"
      placeholder="할일을 추가해주세요"
      autofocus
    />
    `;
  }
  setEventListener() {
    $('.todo-input').addEventListener('keypress', (e) => {
      if (e.keyCode === 13 && e.target.value !== "") {
        this.addTodo(e.target.value);
      }
    });
  }
}
