const playList = [
    {
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song: "BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song: "ENTER SANDMAN"
    }

];

//1

const list = document.createElement('ol');

playList.forEach((item) => {
    const listItem = document.createElement('li');

    listItem.innerText = `${item.author}:${item.song}`
    list.appendChild(listItem)
});

document.getElementById('app').appendChild(list)

//2
const button = document.getElementById('modal--button');
const body = document.getElementsByTagName('body')[0];
const modalBackdrop = document.getElementById('modal-backdrop');
const modal = document.getElementById('modal');
const closeButton = document.getElementById('modal--close');

const toggleBackdrop = () => {
    if (modalBackdrop.classList.contains('show')) {
        modalBackdrop.classList.remove('show');
        modalBackdrop.style.display = 'none';
    } else {
        modalBackdrop.classList.add('show');
        modalBackdrop.style.display = 'block';
    }
}

const toggleModal = () => {
    if (modal.classList.contains('show')) {
        modal.classList.remove('show');
        modal.style.display = 'none';
    } else {
        modal.classList.add('show');
        modal.style.display = 'block';
    }
}

button.addEventListener('click', () => {
    toggleBackdrop();
    toggleModal();
    body.classList.add('modal-open');
});

closeButton.addEventListener('click', () =>{
    toggleBackdrop();
    toggleModal();
    body.classList.remove('modal-open');
});

//3

const switchButton = document.getElementById('switch--button');

switchButton.addEventListener('click', () =>{
    const currentLight = document.getElementsByClassName('active')[0];
    const nextLight =  currentLight?.nextElementSibling;

    if (currentLight) {
        currentLight.classList.remove('active');
    }

    if (nextLight) {
        nextLight.classList.add('active');

        return;
    }

    const firstLight = document.getElementsByClassName('light')[0];
    firstLight.classList.add('active');
});

