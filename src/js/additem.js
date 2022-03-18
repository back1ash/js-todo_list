import count from './countitems.js';

//새 일정 추가 enter 이벤트 감지
$(document).ready(function () {
  $('#new-todo-title').keydown(function (key) {
    if (key.keyCode == 13) {
      additem();
    }
  });
});

// 새 일정 추가 template 만들어서 html에 추가
function additem() {
  const element = document.getElementById('new-todo-title');
  const data = element.value;
  if (data) {
    document.getElementById('todo-list').innerHTML += `
    <li class="active">
      <div class="view">
        <input class="toggle" type="checkbox" onchange="setState(this)"/>
        <label class="label" ondblclick="editing(this)">${data}</label>
        <button class="destroy"></button>
      </div>
      <input class="edit" value="${data}" onkeyup="changeval(this);"
      />
    </li>
  `;
    console.log('값 추가됨.');
  }
  element.value = '';

  count();
}
