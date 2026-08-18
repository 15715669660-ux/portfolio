const tabs = document.querySelectorAll('.case-tabs button');
const cases = document.querySelectorAll('.case-content');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((item) => item.classList.remove('active'));
    cases.forEach((item) => item.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.case).classList.add('active');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));
