// TODO: Fix the errors in the functions below!

function addTask(taskList, newTask) {
  taskList.push(newTask);
  return taskList;
}

function deleteTask(taskList, index) {
  taskList.splice(index, 1)
  return taskList;
}

function editTask(taskList, index, editedTask) {
  taskList.splice(index, 1, editedTask)
  return taskList;
}

function completeTask(taskList, index) {
  taskList.at(index).completed = true;
  return taskList;
}

function clearCompletedTasks(taskList) {
  return taskList.filter((task)=> task.completed !== true);
}

function sortTasksByDate(taskList) {
  return taskList.sort((taskA, taskB)=>{
    return taskA.date < taskB.date ? -1 : 1
  })
}

function filterTasksByKeyword(taskList, keyword) {
  return taskList.filter((task)=> new RegExp(keyword, 'i').test(task))
}

function getCompletedTasks(taskList) {
  return taskList.filter((task)=> task.completed === true);
}

function getIncompleteTasks(taskList) {
  return taskList.filter((task)=> task.completed !== true);
}

function getTaskCount(taskList) {
  return taskList.length
}

function getCompletedTaskCount(taskList) {
  return taskList.filter((task)=> task.completed === true).length;
}

function getIncompleteTaskCount(taskList) {
  return taskList.filter((task)=> task.completed !== true).length;
}

function removeCompletedTasks(taskList) {
  return taskList.filter((task)=> task.completed !== true);
}

function markAllTasksAsCompleted(taskList) {
  return taskList.map((task)=> {
    task.completed = true;
    return task
  })
}

function markAllTasksAsIncomplete(taskList) {
  return taskList.map((task)=> {
    task.completed = false;
    return task
  })}

function addTaskToList(taskList, task) {
  taskList.push({
    task,
    completed: false
  });
  return taskList
}

function deleteTaskFromList(taskList, index) {
  taskList.splice(index, 1)
  return taskList;
}

function editTaskInList(taskList, index, newTask) {
  taskList.at(index).task = newTask
  return taskList;
}

function moveTaskUp(taskList, index) {
  if (index === 0) {
    return taskList;
  }
  const old = taskList.splice(index - 1,1)[0]
  taskList.splice(index, 0, old)
  return taskList;
}

function moveTaskDown(taskList, index) {
  if (index === taskList.length - 1) {
    return taskList;
  }
  const old = taskList.splice(index + 1,1)[0]
  taskList.splice(index, 0, old)
  return taskList;
}

module.exports = {
  addTask,
  deleteTask,
  editTask,
  completeTask,
  clearCompletedTasks,
  sortTasksByDate,
  filterTasksByKeyword,
  getCompletedTasks,
  getCompletedTaskCount,
  getIncompleteTaskCount,
  getTaskCount,
  getIncompleteTasks,
  removeCompletedTasks,
  markAllTasksAsCompleted,
  markAllTasksAsIncomplete,
  addTaskToList,
  editTaskInList,
  deleteTaskFromList,
  moveTaskUp,
  moveTaskDown,
};
