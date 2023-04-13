import '../styles/index.scss';

const btn = document.querySelector('.btn--toggle-css'),
className = 'prettified',
prettified = localStorage.getItem(className);

// prettified === null means that the user has not set a preference yet
// prettified class is added by default
if (prettified === 'false') {
  document.body.classList.remove(className);
}

const togglePrettified = () => {
  const prettified = localStorage.getItem(className);

  if (prettified === 'false') {
    document.body.classList.add(className);
    localStorage.setItem(className, 'true');
  } else {
    document.body.classList.remove(className);
    localStorage.setItem(className, 'false');
  }
};

btn.addEventListener('click', () => {
  togglePrettified();
});