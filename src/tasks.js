let makeTasks = () => {
    class Task {
        constructor(name, notes, checklist) {
            this.name = name;
            this.notes = notes;
            this.checklist = false;
        }
        
    }

    

    const taskList = document.getElementById('container');
    const addBtn = document.createElement('button');
    addBtn.setAttribute('class','button');
    addBtn.setAttribute('id','tButton');
    const input = document.createElement('input');
    addBtn.appendChild(input);
    input.setAttribute('type','text');
    input.setAttribute('id','myInput');
    input.setAttribute('placeholder','New Task');
    taskList.appendChild(addBtn);
    addBtn.textContent = '+ Add Task';
    

    addBtn.addEventListener('click', () => {
        newElement();        
    })

    //create delete button for each list item       why no delete button?
    const nodeList = document.getElementsByTagName('li');
    for (i = 0; i<nodeList.length; i++) {
        const span = document.createElement('span');
        span.className = 'close';
        const x = document.createTextNode('x');
        x.classList.add('xbtn');
        span.appendChild(x);
        nodeList[i].appendChild(span);
    } 

    //click on close button to hide the current list item
    const close = document.getElementsByClassName('close');
    for (i=0; i<close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = 'none';
        }
}

//add a check when list item is clicked
const list = document.querySelector('ul');
list.addEventListener('click',function(e) {
    if (e.target.tagName === 'li') {
        e.target.classList.toggle('checked');
    }
}, false);    //false?

//create a new list item when 'add task' button is clicked
function newElement() {
    const li = document.createElement('li');
    const inputValue = document.getElementById('myInput').value;
    const t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById('list').appendChild(li);
    }
    document.getElementById('myInput').value = '';
}




}

export {makeTasks}