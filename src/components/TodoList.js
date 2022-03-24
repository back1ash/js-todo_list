import { $ } from '../utils/Selectors.js';

export default class TodoList {
  constructor({ $target, state, checkTodo, delTodo, editTodo }) {
    this.$target = $target;
    this.state = state;
    this.checkTodo = checkTodo;
    this.delTodo = delTodo;
    this.editTodo = editTodo;

    this.render();
    this.setEventListener();
  }
  render() {
    // this.$target.innerHTML = this.state.todoList
    //   .map(
    //     (todo) =>
    //       `
    //   <li class="${todo.isChecked ? 'completed' : 'active'}" id="${todo.id}">
    //     <div class="view">
    //       <input class="toggle" type="checkbox" ${
    //         todo.isChecked ? 'checked' : ''
    //       }/>
    //       <label class="label">${todo.title}</label>
    //       <button class="destroy"></button>
    //     </div>
    //     <input class="edit" value="${todo.title}" />
    //   </li>
    //   `
    //   )
    //   .join('');
    switch (this.state.filter) {
      case 'active ':
        this.$target.innerHTML = this.state.todoList
          .map((todo) => {
            if (todo.isChecked == false) {
              return `
            <li class="${todo.isChecked ? 'completed' : 'active'}" id="${
                todo.id
              }">
              <div class="view">
                <input class="toggle" type="checkbox" ${
                  todo.isChecked ? 'checked' : ''
                }/>
                <label class="label">${todo.title}</label>
                <button class="destroy"></button>
              </div>
              <input class="edit" value="${todo.title}" />
            </li>
            `;
            }
          })
          .join('');
        break;
      case 'completed ':
        this.$target.innerHTML = this.state.todoList
          .map((todo) => {
            if (todo.isChecked == true) {
              return `
            <li class="${todo.isChecked ? 'completed' : 'active'}" id="${
                todo.id
              }">
              <div class="view">
                <input class="toggle" type="checkbox" ${
                  todo.isChecked ? 'checked' : ''
                }/>
                <label class="label">${todo.title}</label>
                <button class="destroy"></button>
              </div>
              <input class="edit" value="${todo.title}" />
            </li>
            `;
            }
          })
          .join('');
        break;
      default:
        this.$target.innerHTML = this.state.todoList
          .map(
            (todo) =>
              `
        <li class="${todo.isChecked ? 'completed' : 'active'}" id="${todo.id}">
          <div class="view">
            <input class="toggle" type="checkbox" ${
              todo.isChecked ? 'checked' : ''
            }/>
            <label class="label">${todo.title}</label>
            <button class="destroy"></button>
          </div>
          <input class="edit" value="${todo.title}" />
        </li>
        `
          )
          .join('');
    }
  }

  setEventListener() {
    this.$target.addEventListener('click', (e) => {
      if (e.target.closest('.toggle') !== null) {
        this.checkTodo(e.path[2].id);
      }
      if (e.target.closest('.destroy') !== null) {
        this.delTodo(e.path[2].id);
      }
    });
    this.$target.addEventListener('dblclick', (e) => {
      if (e.target.closest('.label') !== null) {
        e.path[2].classList.add('editing');
      }
    });
    this.$target.addEventListener('keydown', (e) => {
      //이벤트 keypress로 받을시 ESC 입력 감지 못함
      if (e.keyCode === 13) {
        this.editTodo(e.path[1].id, e.target.value);
      }
      if (e.keyCode === 27) {
        console.log(e.path[1]);
        e.path[1].classList.remove('editing');
      }
    });
  }
}
