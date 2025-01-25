function allowDrop(event) {
  event.preventDefault();
  if (!event.target.classList.contains("drag-over")) {
    event.target.classList.add("drag-over");
  }
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text");
  const draggedElement = document.getElementById(data);
  if (event.target.classList.contains("list")) {
    event.target.appendChild(draggedElement);
  } else if (event.target.parentElement.classList.contains("list")) {
    event.target.parentElement.appendChild(draggedElement);
  }
  event.target.classList.remove("drag-over");
}

document.querySelectorAll(".list").forEach((list) => {
  list.addEventListener("dragleave", (event) => {
    if (event.target.classList.contains("drag-over")) {
      event.target.classList.remove("drag-over");
    }
  });
});
