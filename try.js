// const p = document.getElementById("Myp");
// p.innerText = 'hello from fathi';
const p = document.getElementsByTagName("p");
console.log("pharagraphs:",p);
for (const element of p) {
    element.innerText = Math.random();
    
}
const Names = ["fathi", "zidan", "rasha","amanee"];
const sec1 = document.getElementById("sec1");
const ul = document.createElement("ul");
Names.forEach((name) => {
    const li = document.createElement("li");
    li.innerText = name;
    ul.append(li);
});
sec1.appendChild(ul);
