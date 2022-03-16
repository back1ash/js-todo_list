import count from './countitems.js';

$(document).ready(function () {
  $('#new-todo-title').keydown(function (key) {
    if (key.keyCode == 13) {
      add();
    }
  });
});

function add() {
  const element = document.getElementById('new-todo-title');
  const data = element.value;
  document.getElementById('todo-list').innerHTML += `
  <li>
    <div class="view">
      <input class="toggle" type="checkbox" onchange="setState(this)"/>
      <label class="label">${data}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="${data}" />
  </li>
`;
  element.value = '';
  console.log('값 추가됨.');
  count();
}
