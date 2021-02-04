let makeProjects = () => {
    class Project {
        constructor(name,dueDate,priority) {
            this.name = name;
            this.dueDate = dueDate;
            this.priority = priority;
        }
        
    }
    
    let exampleProject = new Project ('build robots', 'by 5th', 'low');
    


    const projectList = document.getElementById('container');
    const addBtn = document.createElement('button');
    addBtn.setAttribute('class','button');
    addBtn.setAttribute('id','pButton');
    projectList.appendChild(addBtn);
    addBtn.textContent = '+ New Project';

    addBtn.addEventListener('click', () => {
        let makeNewProject = () => {
            
        }
        
    })

}

export {makeProjects}