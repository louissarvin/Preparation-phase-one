function newElement() {
  const inputValue = document.getElementById("myInput").value.trim();
  if (inputValue === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = inputValue;

  const closeSpan = document.createElement("span");
  closeSpan.textContent = "✕";
  closeSpan.className = "close";
  closeSpan.onclick = function () {
    this.parentElement.remove();
  };
  li.appendChild(closeSpan);

  li.onclick = function (e) {
    if (e.target !== closeSpan) {
      this.classList.toggle("checked");
    }
  };

  document.getElementById("myUL").appendChild(li);
  document.getElementById("myInput").value = "";
}

document.getElementById("searchInput").addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase().trim();
  const items = document.querySelectorAll("#myUL li");
  items.forEach((item) => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(searchTerm) ? "" : "none";
  });
});

document.querySelectorAll("#myUL li").forEach((li) => {
  const closeSpan = document.createElement("span");
  closeSpan.textContent = "✕";
  closeSpan.className = "close";
  closeSpan.onclick = function () {
    this.parentElement.remove();
  };
  li.appendChild(closeSpan);

  li.onclick = function (e) {
    if (e.target !== closeSpan) {
      this.classList.toggle("checked");
    }
  };
});
