export default function count() {
  let todoList = document.getElementById('todo-list');
  let amount = document.getElementById('amount');
  amount.innerText = todoList.childElementCount;
}
