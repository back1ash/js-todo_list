// 할일 완료시 체크 기능
function setState(cb) {
  const li_tag = cb.parentNode.parentNode;
  cb.checked = li_tag.className == 'active' ? true : false;
  li_tag.className = cb.checked ? 'completed' : 'active';
  console.log('Checked 변경됨.');
}
