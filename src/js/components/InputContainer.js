import { $ } from '../utils/selector.js';

export default class InputContainer {
  constructor({ $target, addTodo }) {
    this.$target = $target;
    this.addTodo = addTodo;
    this.render();
    this.setEvents();
  }

  setEvents() {
    // input
    $('.new-todo-input').addEventListener('keypress', (e) => {
      if (e.key == 'Enter' && e.target.value !== '') {
        this.addTodo(e.target.value);
      }
    });
  }
  render() {
    const template =
      '<input id="new-todo-title" class="new-todo" placeholder="할일을 추가해주세요" autofocus />';
    this.$target.innerHTML = template;
  }
}
