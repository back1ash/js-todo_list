import count from './countitems.js';
// 할일의 X 버튼 클릭 이벤트 감지
$(document).on('click', '.destroy', function (e) {
  e.preventDefault();
  delitem(this);
});
// 클릭 이벤트 감지 이후 할일 삭제
function delitem(button) {
  button.parentNode.parentNode.remove();
  console.log('값 삭제됨.');
  count();
}
