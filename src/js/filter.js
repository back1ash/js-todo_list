// todo list의 상태값을 확인하여, 해야할 일과, 완료한 일을 클릭하면 해당 상태의 아이템만 보여주기
function filter(a) {
  const hash = a.href.split('#')[1];
  const li_actives = document.querySelectorAll('li.active');
  const li_completeds = document.querySelectorAll('li.completed');
  switch (hash) {
    case 'active':
      console.log('here is active');
      li_completeds.forEach(
        (li_completed) => (li_completed.style.display = 'block')
      );
      li_actives.forEach((li_active) => (li_active.style.display = 'none'));
      break;
    case 'completed':
      console.log('here is completed');
      li_actives.forEach((li_active) => (li_active.style.display = 'block'));
      li_completeds.forEach(
        (li_completed) => (li_completed.style.display = 'none')
      );
        break;
      default:
        console.log('here is main');
        li_actives.forEach((li_active) => (li_active.style.display = 'block'));
        li_completeds.forEach(
            (li_completed) => (li_completed.style.display = 'block')
        );
  }
}
