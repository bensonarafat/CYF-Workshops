//increments the number in a node's text
function increment(node) {
  let current = node.textContent;
  node.textContent = Number(current) + 1;
}

export function App() {
  const body = document.createElement("body");

  const header = document.createElement("header");
  header.innerHTML = `
        <h1>Number Counter</h1>
        <p>A simple counter. Press increment to increase the count by one.</p>
    `;
  body.appendChild(header);


  const button = body.querySelector("#increment");
  const counter = body.querySelector("#counter");
  button.addEventListener("click", () => {
    increment(counter);
  });

  return body;
}