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

const people = [new Person(1, 'Jane', 18), new Person(2, 'Barbara', 15), new Person(3, 'Tom', 19), new Person(4, 'John', 92),]

const tableBody = document.querySelectorAll('#people tbody')[0];

people.forEach(person => {
    const row = document.createElement('tr');

    row.innerHTML = `
        <th scope="row">${person.id}</th>
        <td>${person.name}</td>
        <td>${person.age}</td>
    `;

    tableBody.appendChild(row)
})
