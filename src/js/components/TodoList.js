import { $ } from '../utils/selector.js';
import { COMPLETED } from '../core/constances.js';

// new-todo 입력 처리
export default class TodoList {
  constructor({ $target, delTodo, setCheck, editTodo, props }) {
    this.$target = $target;
    this.delTodo = delTodo;
    this.setCheck = setCheck;
    this.editTodo = editTodo;
    this.props = props;

    $target.addEventListener('click', (e) => {
      if (e.target.closest('button') !== null) {
        this.del(e.target.previousElementSibling);
      }
      if (e.target.closest('.toggle') !== null) {
        this.check(e.target.nextElementSibling);
      }
    });
    $target.addEventListener('dblclick', (e) => {
      if (e.target.closest('.label') !== null) {
        this.edit(e);
      }
    });
    this.render();
    //this.setEventListener();
  }

  add(props) {
    this.props = props;
    this.render();
  }

  render() {
    console.log(this.props.todolist);
    this.$target.innerHTML =
      `
    ${this.props.todolist
      .map(
        (todo) => `
    <li data-list class="${todo.progress}">
    <div class="view">
      <input class="toggle" type="checkbox" ${
        todo.progress == COMPLETED ? 'checked' : ''
      }/>
      <label class="label">${todo.content}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="${todo.content}" />
  </li>`
      )
      .join('')}
    ` + this.$target.innerHTML;
  }

  check($target) {
    this.setCheck($target.innerHTML);
  }

  del($target) {
    this.delTodo($target.innerHTML);
  }

  edit($event) {
    $event.path[2].classList.add('editing');
    $('.edit').addEventListener('keypress', (e) => {
      if (e.keyCode == 13) {
        this.editTodo(e);
      }
      if (e.keyCode == 27) {
        console.log('esc 입력됨.');
        $event.path[2].classList.remove('editing');
      }
    });
  }

  filter() {
    $('.selected');
  }
}
