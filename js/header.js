
window.onscroll = () => changePageHeaderBackground();

function changePageHeaderBackground() {
  const pageHeader = document.querySelector('[data-header]');
  const pageHeaderOffsetTrigger = pageHeader.offsetHeight;
  const pageOffset = window.pageYOffset;

  if (pageOffset > pageHeaderOffsetTrigger) {
    pageHeader.classList.add('no-transparency');
  } else {
    pageHeader.classList.remove('no-transparency');
  }
}