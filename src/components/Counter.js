import { $, $$ } from '../utils/Selectors.js';

export default class Counter {
  constructor({ $target, state, setFilter }) {
    this.$target = $target;
    this.state = state;
    this.setFilter = setFilter;

    this.render();
    this.setEventListener();
  }
  render() {
    // let amount = $$(this.state.filter).length;
    let amount = $$('.todo-list li').length;
    if (this.state.filter == 'active') {
      amount = $$('.active').length;
    }
    if (this.state.filter == 'completed') {
      amount = $$('.completed').length;
    }

    this.$target.innerHTML = `
      <span class="todo-count">총 <strong>${amount}</strong> 개</span>
        <ul class="filters">
          <li>
            <a class="all ${
              this.state.filter === 'all ' ? 'selected' : ''
            }" href="#">전체보기</a>
          </li>
          <li>
            <a class="active ${
              this.state.filter === 'active ' ? 'selected' : ''
            }" href="#active">해야할 일</a>
          </li>
          <li>
            <a class="completed ${
              this.state.filter === 'completed ' ? 'selected' : ''
            }" href="#completed">완료한 일</a>
          </li>
        </ul>
    `;
  }
  setEventListener() {
    $('.filters').addEventListener('click', (e) => {
      this.setFilter(e.target.className);
    });
  }
}
