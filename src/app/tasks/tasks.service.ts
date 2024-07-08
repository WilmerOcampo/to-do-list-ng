import {Injectable} from '@angular/core';
import {NewTaskData} from "../models/task";

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Aprender todas las características básicas y avanzadas de angular y cómo aplicarlas.',
      dueDate: '2025-12-31',
    }, {
      id: 't2',
      userId: 'u3',
      title: 'Construir un primer prototipo',
      summary: 'Construir un primer prototipo de un sitio web de una tienda online.',
      dueDate: '2025-07-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Preparar plantilla de incidencias',
      summary: 'Preparar y describir una plantilla de incidencias que le ayudará con la gestión del proyecto.',
      dueDate: '2024-08-15',
    }
  ];

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    });
    //this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    //this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
