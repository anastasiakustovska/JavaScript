//1

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get radiusCircle() {
        return this.radius
    }

    set radiusCircle(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    }

    getSquare() {
        return (Math.PI * Math.pow(this.radius, 2)).toFixed(2);
    }

    getLength() {
        return (Math.PI * 2 * this.radius).toFixed(2);
    }
}

let circle = new Circle(4)

console.log(circle);
console.log(circle.radiusCircle);
console.log(circle.radiusCircle);
circle.radiusCircle = 25;
console.log(circle.diameter);
console.log(circle.getSquare());
console.log(circle.getLength());

//2

class Marker {
    constructor(color, inkAmount) {
        this.color = color;
        this.inkAmount = inkAmount;
    }

    write(text) {
        const characters = text.split('');
        let string = '';

        characters.map((character) => {
            if (this.inkAmount === 0) {
                return
            }
            if (character !== ' ') {
                this.inkAmount -= 0.5;
            }

            string += character;
        });

        document.write(`<span style="color: ${this.color}">${string}</span>`)
    }
}

let marker = new Marker('yellow', 3.5);

marker.write('So, what exactly is a class? That’s not an entirely new language-level entity, as one might think.\n' + '\n' + 'Let’s unveil any magic and see what a class really is. That’ll help in understanding many complex aspects.\n' + '\n' + 'In JavaScript, a class is a kind of function.\n' + '\n');

class RefillableMarker extends Marker {
    refill(amount = 100) {
        let newAmount = this.inkAmount + amount;

        this.inkAmount = newAmount > 100 ? 100 : amount;
    }
}

let refillableMarker = new RefillableMarker('blue', 5);

refillableMarker.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dignissimos distinctio eveniet harum id quos sed. Aut consectetur, delectus dolor eius iste magnam modi omnis quam quos reprehenderit vero voluptatem!');
refillableMarker.refill();
refillableMarker.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dignissimos distinctio eveniet harum id quos sed. Aut consectetur, delectus dolor eius iste magnam modi omnis quam quos reprehenderit vero voluptatem!');

//3


class Employee {
    constructor(id, name, age, salary, position) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.position = position;
    }
}

class EmpTable {
    constructor(employees = []) {
        this.employees = employees;
    }

    getHtml() {
        let dom = '';

        this.employees.map((employee) => {
            dom += `<tr>
                <th>
                    ${employee.id}
                </th>
                <td>
                    ${employee.name}
                </td>
                <td>
                    ${employee.age}
                </td>
                <td>
                    ${employee.salary}
                </td>
                <td>
                    ${employee.position}
                </td>
            </tr>`;
        });

        return dom;
    }
}

let table = new EmpTable([new Employee(1, 'John Doe', 20, 5000, 'JS Developer'), new Employee(2, 'Anastasia Kustovska', 20, 25000, 'Software Architect'),]);

document.getElementById('employees').innerHTML += table.getHtml();

