function add() {
  const data = document.getElementById('new-todo-title').value;
  document.getElementById('todo-list').innerHTML += `
  <ul id="todo-list" class="todo-list">
  <li>
    <div class="view">
      <input class="toggle" type="checkbox"/>
      <label class="label">${data}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="${data}" />
  </li>
`;
}
