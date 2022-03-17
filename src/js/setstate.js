// 할일 완료시 체크 기능
function setState(cb) {
  const li_tag = cb.parentNode.parentNode;
  cb.checked = li_tag.className ? false : true;
  li_tag.className = li_tag.className ? '' : 'completed';
  console.log('Checked 변경됨.');
}
