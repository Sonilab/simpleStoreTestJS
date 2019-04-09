var obj = [];

function saveTest() {
  let date = new Date();
  obj.push(date.getHours());
  obj.push(date.getMinutes());
  obj.push(date.getSeconds());

  save("time", obj);
  document.getElementById("save").textContent=obj;

}

function loadTest() {
  let data = load("time")
  document.getElementById("load").textContent = data;
}
