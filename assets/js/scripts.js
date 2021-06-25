(() => {
  const copy = document.querySelector('.copy');

  const year = new Date().getFullYear();
  year === 2021
    ? (copy.innerHTML = `&copy;${year} Michael Houmann`)
    : (copy.innerHTML = `&copy;2021 - ${year} Michael Houmann`);
})();
