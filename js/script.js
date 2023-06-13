const skills = {
    data: [
        html = {
            name: 'html',
            width: 40,
            path: 'html.svg'
        },
        css = {
            name: 'css',
            width: 40,
            path: 'css.svg'
        },
        pyhton = {
            name: 'python',
            width: 60,
            path: 'python.svg'
        },
        cpp = {
            name: 'c++',
            width: 80,
            path: 'c++.svg'
        }
    ],
    generateList: function(parrent) {
        this.data.forEach(element => {
            const dt = document.createElement('dt')
            dt.classList.add('skill-item')
            dt.innerHTML = element.name;
            dt.style.backgroundImage = `url(img/skills/${element.path})`;
            parrent.append(dt)
            const dd = document.createElement('dd')
            const div = document.createElement('div')
            div.style.width = `${element.width}%`;
            dd.classList.add('skill-level')
            dd.append(div)
            parrent.append(dd)
        });
    }
}

const skillList = document.querySelector('dl.skill-list')
skills.generateList(skillList)
