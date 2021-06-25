(function () {
  let copy = document.getElementById('copy');
  let date = new Date().getFullYear();

  date === 2018
    ? (copy.innerHTML = `<i class="far fa-copyright"></i>${date}`)
    : (copy.innerHTML = `<i class="far fa-copyright"></i>2018 - ${date}`);
})();
