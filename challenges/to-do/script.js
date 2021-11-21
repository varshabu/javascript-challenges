const listContainer = document.getElementById('list')
const items = ["JavaScript", "TypeScript", "CSS3", "HTML5", "ReactJS", "GraphQL", "NextJS"]

function createTodos(items) {
    var listcontainer = document.createDocumentFragment()
    items.forEach((item, index) => {
        listcontainer.appendChild(createTodo(item, index))
    });
    return listcontainer;
}

function createTodo(item, index) {
    var listItem = document.createElement('div');
    var content = document.createElement('span');
    var btn = document.createElement('button');

    content.textContent = item
    btn.textContent = 'Done'
    btn.classList.add('btn-done')

    listItem.appendChild(content)
    listItem.appendChild(btn)

    return listItem
}

listContainer.appendChild(createTodos(items))
