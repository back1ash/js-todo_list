function setState(cb) {
  const li_tag = cb.parentNode.parentNode;
  cb.checked = li_tag.className ? false : true;
  li_tag.className = li_tag.className ? '' : 'completed';
}
