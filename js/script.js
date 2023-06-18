const skills = {
    data: [
        {
            name: 'html',
            level: 40,
            path: 'html.svg'
        },
        {
            name: 'css',
            level: 40,
            path: 'css.svg'
        },
        {
            name: 'python',
            level: 60,
            path: 'python.svg'
        },
        {
            name: 'c++',
            level: 80,
            path: 'c++.svg'
        }
    ],

    isSort: false,

    generateList: function(parent) {
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
    }
}

const skillList = document.querySelector('dl.skill-list')
skills.generateList(skillList)


const sortBtnsBlock = document.querySelector('div.skills-sort')
console.log(sortBtnsBlock);

sortBtnsBlock.addEventListener('click', (e) => {
    let target = e.target;
    if (e.target.nodeName === "BUTTON"){
        // console.log(e.target);
        switch (target.dataset.type) {
            case 'name':
                sortByName();
                break;
            case 'level':
                sortByLevel();
                break;
            default:
                console.log('неизвестная кнопка');
        }
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

function sortByName() {
    if (skills.isSort !== "name") {
        skills.data.sort(getComaparer('name'));
        skills.isSort = "name";
        console.log('отсортировали данные по имени');
    } else {
        skills.data.reverse();
        console.log('инвертировали данные');
    }
    skills.generateList(skillList);
}

function sortByLevel() {
    if (skills.isSort !== "level") {
        skills.data.sort(getComaparer('level'));
        skills.isSort = "level";
        console.log('отсортировали данные по уровню');
    } else {
        skills.data.reverse();
        console.log('инвертировали данные');
    }
    skills.generateList(skillList);
}