import count from './countitems.js';

$(document).on('click', '.destroy', function (e) {
  e.preventDefault();
  delitem(this);
});

function delitem(button) {
  button.parentNode.parentNode.remove();
  console.log('값 삭제됨.');
  count();
}
