const data = [
    html = {
        name: 'html',
        width: 40,
        class: 'skill-item_html'
    },
    css = {
        name: 'css',
        width: 40,
        class: 'skill-item_css'
    },
    pyhton = {
        name: 'python',
        width: 60,
        class: 'skill-item_python'
    },
    cpp = {
        name: 'c++',
        width: 80,
        class: 'skill-item_cpp'
    }
]

const skillList = document.querySelector('dl.skill-list')

data.forEach(element => {
    const dt = document.createElement('dt')
    dt.classList.add('skill-item', element.class)
    dt.innerHTML = element.name;
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