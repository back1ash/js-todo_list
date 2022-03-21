import { $ } from './utils/selector.js';

export default class App {
  constructor($target) {
    this.$target = $target;

    this.render();
    this.mounted();
  }
    
  //웹 접속시 최초 1회 기본 템플릿 생성
  render() {
    this.$target.innerHTML = `
    <h1>TODOS</h1>
    <input
      id="new-todo-title"
      class="new-todo"
      placeholder="할일을 추가해주세요"
      autofocus
    />
    <main>
      <input class="toggle-all" type="checkbox" />
      <ul id="todo-list" class="todo-list"></ul>
      <div class="count-container">
        <span class="todo-count">총 <strong>0</strong> 개</span>
        <ul class="filters">
          <li>
            <a class="all selected" href="#">전체보기</a>
          </li>
          <li>
            <a class="active" href="#active">해야할 일</a>
          </li>
          <li>
            <a class="completed" href="#completed">완료한 일</a>
          </li>
        </ul>
      </div>
    </main>`;
  }
  mounted() {}
  
}
