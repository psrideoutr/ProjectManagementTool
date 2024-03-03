class ProjectManagementTool {
  constructor() {
    this.projects = [];
  }

  createProject(name, description) {
    const project = {
      name,
      description,
      tasks: [],
    };
    this.projects.push(project);
    return project;
  }

  deleteProject(project) {
    const index = this.projects.indexOf(project);
    if (index !== -1) {
      this.projects.splice(index, 1);
    }
  }

  createTask(project, name, description, assignee) {
    const task = {
      name,
      description,
      assignee,
      status: 'To Do',
    };
    project.tasks.push(task);
    return task;
  }

  deleteTask(project, task) {
    const index = project.tasks.indexOf(task);
    if (index !== -1) {
      project.tasks.splice(index, 1);
    }
  }

  updateTaskStatus(task, status) {
    task.status = status;
  }

  assignTask(task, assignee) {
    task.assignee = assignee;
  }

  getProjectTasks(project) {
    return project.tasks;
  }
}

// 示例用法
const projectManagementTool = new ProjectManagementTool();

const project = projectManagementTool.createProject('Project 1', 'This is the first project');
const task1 = projectManagementTool.createTask(project, 'Task 1', 'Do something', 'John');
const task2 = projectManagementTool.createTask(project, 'Task 2', 'Do something else', 'Jane');

projectManagementTool.updateTaskStatus(task1, 'In Progress');
projectManagementTool.assignTask(task2, 'Alice');

console.log(projectManagementTool.getProjectTasks(project));
