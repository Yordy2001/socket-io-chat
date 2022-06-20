const socket = io();
const messages = document.getElementById('messages')
const form = document.getElementById('form');
const input = document.getElementById('input');

const handleChange = (e)=>{
    const status = document.getElementsByClassName('status');
    console.log(e.tatget)
    socket.emit(status.innerHTML = 'typing...')
}

input.addEventListener('change', handleChange)


form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (input.value) {
        socket.emit('chat message', input.value);
        input.value = '';
      }
});

socket.on('chat message', function(msg) {
let item = document.createElement('li');
item.textContent = msg;
messages.appendChild(item);
window.scrollTo(0, document.body.scrollHeight);
});