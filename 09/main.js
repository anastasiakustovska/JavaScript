// 1

addEventListener('keydown', (event) => {
    const previewBlock = document.getElementById('text-preview');
    const input = document.getElementById('text-input');

    if (event.code === "KeyE" && event.ctrlKey) {
        input.classList.remove('hidden');
        input.focus();
        previewBlock.classList.add('hidden');

        return;
    }

    if (event.code === "KeyS" && event.ctrlKey) {
        previewBlock.classList.remove('hidden');
        previewBlock.innerText = input.value;
        input.classList.add('hidden');
    }
});

//2

class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}

const people = [new Person(1, 'Jane', 18), new Person(2, 'Barbara', 15), new Person(3, 'Tom', 19), new Person(4, 'John', 92), new Person(5, 'Barnaby', 10),];

const tableBody = document.querySelectorAll('#people tbody')[0];

function renderTable(items = []) {
    items.forEach(person => {
        const row = document.createElement('tr');

        row.innerHTML = `
        <th scope="row">${person.id}</th>
        <td>${person.name}</td>
        <td>${person.age}</td>
    `;

        tableBody.appendChild(row)
    })
}

renderTable(people);

function clearTable() {
    tableBody.innerHTML = "";
}

const headers = Array.from(document.getElementsByClassName("table-heading"));

headers.forEach(header => {
    header.addEventListener("click", (event) => {
        const column = event.target.getAttribute('data-order');

        const sortedPeople = people.sort((firstPerson, secondPerson) => {
            if (firstPerson[column] < secondPerson[column]) {
                return -1;
            }
            if (firstPerson[column] > secondPerson[column]) {
                return 1;
            }
            return 0;
        })
        clearTable();
        renderTable(sortedPeople)
    })
})

//3

const resizableElement = document.getElementById('resizable');
const resizer = document.createElement('div');
let startX, startY, startWidth, startHeight;

resizer.classList.add('resizer');
resizableElement.appendChild(resizer);
resizer.addEventListener('mousedown', onResize);

resizableElement.addEventListener('click', function init() {
    resizableElement.removeEventListener('click', init);
    resizableElement.className = resizableElement.className + ' resizable';
});

const resize = (e) => {
    resizableElement.style.width = (startWidth + e.clientX - startX) + 'px';
    resizableElement.style.height = (startHeight + e.clientY - startY) + 'px';
}

const onResizeStop = () => {
    document.documentElement.removeEventListener('mousemove', resize);
    document.documentElement.removeEventListener('mouseup', onResizeStop);
}

function onResize(e) {
    startX = e.clientX;
    startY = e.clientY;

    startWidth = parseInt(document.defaultView.getComputedStyle(resizableElement).width, 10);
    startHeight = parseInt(document.defaultView.getComputedStyle(resizableElement).height, 10);

    console.log({startY, startX, startWidth, startHeight})

    document.documentElement.addEventListener('mousemove', resize);
    document.documentElement.addEventListener('mouseup', onResizeStop);
}
