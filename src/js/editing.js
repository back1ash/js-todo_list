// 더블클릭시에 수정모드로 진입
function editing(label) {
  console.log('더블클릭 됨');
  const li = label.parentNode.parentNode;
  li.className = 'editing';
}
