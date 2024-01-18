const dragEle = document.getElementById('drag-region')
const contentEle = document.getElementById('content')
const myElement = contentEle

function adjustElementSize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  myElement.style.width = width - 5 + 'px';
  myElement.style.height = height - 5 + 'px';
}

adjustElementSize();

window.addEventListener('resize', adjustElementSize);

dragEle.addEventListener('click', () => {
  const title = titleInput.value
  window.electronAPI.setTitle(title)
})

// ipcRenderer.on('message-channel', (event, arg) => {
//   console.log(arg); // 打印 "Hello from Main Process"
// });
// console.log('123123');