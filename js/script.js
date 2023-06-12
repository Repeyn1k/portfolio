const data = [
    html = {
        name: 'html',
        width: 40,
        class: 'skill-item_html',
        path: 'html.svg'
    },
    css = {
        name: 'css',
        width: 40,
        class: 'skill-item_css',
        path: 'css.svg'
    },
    pyhton = {
        name: 'python',
        width: 60,
        class: 'skill-item_python',
        path: 'python.svg'
    },
    cpp = {
        name: 'c++',
        width: 80,
        class: 'skill-item_cpp',
        path: 'c++.svg'
    }
]

const skillList = document.querySelector('dl.skill-list')

data.forEach(element => {
    const dt = document.createElement('dt')
    dt.classList.add('skill-item')
    dt.innerHTML = element.name;
    dt.style.backgroundImage = `url(../img/skills/${element.path})`;
    skillList.append(dt)
    const dd = document.createElement('dd')
    const div = document.createElement('div')
    div.style.width = `${element.width}%`;
    dd.classList.add('skill-level')
    dd.append(div)
    skillList.append(dd)
});

console.log(skillList)
// data.html = document.querySelector()