import { $, $$ } from '../utils/selector.js';

// 필터 적용시 보여지는 templete처리
export default class CountContainer {
  constructor($target, props) {
    this.$target = $target;
    this.props = props;
    this.render();
  }

  count(filter) {
    this.props.count = $$(filter).length;
    this.render();
  }
  render() {
    this.$target.innerHTML = `
      <span class="todo-count">총 <strong>${this.props.count}</strong> 개</span>
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
    `;
    $('.filters').addEventListener('click', (e) => {
      $('.selected').classList.remove('selected');
      console.log(e.target.classList.add('selected'));
    });
  }
}
