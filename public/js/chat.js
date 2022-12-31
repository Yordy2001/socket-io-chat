const socket = io();
// const messages = document.getElementById('messages')
const form = document.getElementById("form");
// const input = document.getElementById('input');
const inputName = document.getElementById("name");
const inputTel = document.getElementById("tel");
const inputPortada = document.getElementById("portada");
const inputInfo = document.getElementById("info");

const handleChange = (e) => {
  const status = document.getElementsByClassName("status");
  socket.emit((status.innerHTML = "typing..."));
};

inputName.addEventListener("change", handleChange);
inputTel.addEventListener("change", handleChange);
inputPortada.addEventListener("change", handleChange);
inputInfo.addEventListener("change", handleChange);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  // if (input.value) {
  socket.emit("client:register", {
    name: inputName.value,
    tel: inputTel.value,
    portada: inputPortada.value,
    info: inputInfo.value,
  });
  // input.value = '';
  // }
});

// socket.on('chat-message', function (msg) {
//     let item = document.createElement('li');
//     item.textContent = msg;
//     messages.appendChild(item);
//     window.scrollTo(0, document.body.scrollHeight);
// });
