const skills = {
    data: [
        {
            name: 'html',
            width: 40,
            path: 'html.svg'
        },
        {
            name: 'css',
            width: 40,
            path: 'css.svg'
        },
        {
            name: 'python',
            width: 60,
            path: 'python.svg'
        },
        {
            name: 'c++',
            width: 80,
            path: 'c++.svg'
        }
    ],
    generateList: function(parent) {
        this.data.forEach(element => {
            const dt = document.createElement('dt')
            dt.classList.add('skill-item')
            dt.innerHTML = element.name;
            dt.style.backgroundImage = `url(img/skills/${element.path})`;
            parent.append(dt)
            const dd = document.createElement('dd')
            const div = document.createElement('div')
            div.style.width = `${element.width}%`;
            div.innerHTML = `${element.width}%`;
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

function sortByName() {
    console.log('сортировка по имени');
}

function sortByLevel() {
    console.log('сортировка по уровню');
}