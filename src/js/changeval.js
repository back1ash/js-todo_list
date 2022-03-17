// 더블클릭 이후 수정 시 값 변화와 형태 고정
function changeval(input) {
  const key = event.keyCode;
  const li = input.parentNode;
  const label = input.previousElementSibling.querySelector('label');
  if (key == 13) {
    console.log(input);
    label.innerText = input.value;
    input.val = li.className = '';
    console.log('enter 입력됨.');
  }
  if (key == 27) {
    input.value = label.innerText;
    li.className = '';
    console.log('esc 입력됨.');
  }
}
