

function load(name) {
  let storedData = JSON.parse(window.localStorage.getItem(name));
  return storedData;
}

function save(name, obj) {
  window.localStorage.setItem(name, JSON.stringify(obj));
}
