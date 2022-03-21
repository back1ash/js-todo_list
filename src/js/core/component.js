import { ALL } from './constances';

export default class Component {
  constructor() {
    this.filter = ALL;
    this.amount;
  }
  //웹 접속시 최초 1회 기본 템플릿 생성
  render() {}
  //렌더 이후 작동 할 내용
  mounted() {}
  //Todo 추가
  addTodo() {}
  //Todo 삭제
  delTodo() {}
  //Todo 내용 변경
  editTodo() {}
  //Todo 완료/미완료 변경
  setState() {}
  //필터 적용
  filter() {}
  //Todo 갯수 세기
  count() {}
}
