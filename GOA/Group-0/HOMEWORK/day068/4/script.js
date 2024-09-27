document.getElementById('button').addEventListener('click', changeLinkAndColor);

function changeLinkAndColor() {
  let link = document.getElementById('link');
  let container = document.getElementById('container');
  link.href = 'https://github.com/danielabramiani/GOA-HW/tree/main/HOME%20WORK';
  container.style.backgroundColor = '#f0f0';
}
