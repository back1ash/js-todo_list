import { $ } from '../utils/selector.js';

// new-todo 입력 처리
export default class TodoList {
  constructor({ $target, delTodo, setCheck, props }) {
    this.$target = $target;
    this.delTodo = delTodo;
    this.setCheck = setCheck;
    this.props = props;

    $target.addEventListener('click', (e) => {
      console.log(e.target.closest('button'));
    });
    this.render();
  }
  t;

  add($target, todo) {
    $target.innerHTML += `
    <li data-list data-index="" class="active">
    <div class="view">
      <input class="toggle" type="checkbox"/>
      <label class="label">${todo}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="${todo}" />
  </li>
    `;
    $('#new-todo-title').value = '';
    $('.toggle').addEventListener('click', (e) => {
      this.setCheck(e.target);
    });
    $('.destroy').addEventListener('click', (e) => {
      console.log(this);
      this.delTodo(e.target.parentNode.parentNode);
    });
  }
  render() {
    this.$target.innerHTML =
      `
    <ul id="todo-list" class="todo-list">
    ${this.props.todolist
      .map(
        ({ todo }) => `
    <li data-list data-index="" class="active">
    <div class="view">
      <input class="toggle" type="checkbox"/>
      <label class="label">${todo}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="${todo}" />
  </li>`
      )
      .join('')}
    </ul>
    ` + this.$target.innerHTML;
  }

  del($target) {
    $target.remove();
  }

  //li에 더블클릭 리스너 설정
  edit($target, key) {
    const input = $target.childElement('input');
    const label = $target.childElement('label');
    $target.className = 'editing';
    if (key == 13) {
      label.innerText = input.value;
      li.classList.remove('editing');
      console.log('enter 입력됨.');
    }
    if (key == 27) {
      input.value = label.innerText;
      li.className = '';
      console.log('esc 입력됨.');
    }
  }

  check($target) {
    console.log($target);
    const li_tag = $target.parentNode.parentNode;
    $target.checked = li_tag.className == 'active' ? true : false;
    li_tag.className = $target.checked ? 'completed' : 'active';
    console.log('Checked 변경됨.');
  }

  filter() {
    $('.selected');
  }
}
