const skills = {
    data: [],

    isSort: false,

    generateList: function (parent) {
        parent.innerHTML = '';
        this.data.forEach(element => {
            const dt = document.createElement('dt')
            dt.classList.add('skill-item')
            dt.innerHTML = element.name;
            dt.style.backgroundImage = `url(img/skills/${element.path})`;
            parent.append(dt)
            const dd = document.createElement('dd')
            const div = document.createElement('div')
            div.style.width = `${element.level}%`;
            div.innerHTML = `${element.level}%`;
            dd.classList.add('skill-level')
            dd.append(div)
            parent.append(dd)
        });
    },

    sortList: function (type) {
        if (this.isSort !== type) {
            this.data.sort(getComaparer(type));
            this.isSort = type;
            console.log('отсортировали');
        } else {
            this.data.reverse();
            console.log('инвертировали данные');
        }
        this.generateList(skillList)
    },

    initList: function (path, parent) {
        fetch(path)
            .then(data => data.json())
            .then(object  => {
                this.data = object.skills;
                this.generateList(parent);
                console.log(object);
            })
            .catch(() => console.error('что-то пошло не так'));
    }
}

const menu = {
    close: function () {
        mainNav.classList.add('main-nav_closed');
        closeButtonNav.classList.remove('nav-btn_close');
        closeButtonNav.classList.add('nav-btn_open');
        closeButtonNav.innerHTML = '<span class="visually-hidden">Открыть меню</span>';
    },

    open: function () {
        mainNav.classList.remove('main-nav_closed');
        closeButtonNav.classList.remove('nav-btn_open');
        closeButtonNav.classList.add('nav-btn_close');
        closeButtonNav.innerHTML = '<span class="visually-hidden">Закрыть меню</span>';
    }
}

const skillList = document.querySelector('dl.skill-list')
skills.initList('db/skills.json', skillList)

const sortBtnsBlock = document.querySelector('div.skills-sort')
sortBtnsBlock.addEventListener('click', (e) => {
    let target = e.target;
    if (e.target.nodeName === "BUTTON") {
        switch (target.dataset.type) {
            case 'name':
                skills.sortList("name");
                break;
            case 'level':
                skills.sortList("level");
                break;
            default:
                console.log('неизвестная кнопка');
        }
    }
});

const mainNav = document.querySelector('nav.main-nav');
const closeButtonNav = document.querySelector('button.nav-btn');

closeButtonNav.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-btn_open')){
        menu.open();
    } else {
        menu.close();
    }
});

menu.close();

const body = document.querySelector('body.dark-theme');
const themeSwitch = document.querySelector('input.switch-checkbox');

if (localStorage.getItem('darktheme') == 'false') {
    themeSwitch.checked = true;  
    body.classList.remove('dark-theme');
} 
themeSwitch.addEventListener('change', (e) => {
    if (e.target.checked){
        body.classList.remove('dark-theme');
        localStorage.setItem('darktheme', 'false');
    }
    else {
        body.classList.add('dark-theme');
        localStorage.setItem('darktheme', 'true');
    }
});

function getComaparer(prop) {
    return function (a, b) {
        if (a[prop] < b[prop]) {
            return -1;
        }
        if (a[prop] > b[prop]) {
            return 1;
        }
        return 0;
    }
}
