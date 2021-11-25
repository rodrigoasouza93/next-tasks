import { FilterType } from "./FilterType";
import { Task } from "./Task";

export class TasksList {
  #all: Task[];
  #usedFilter: FilterType;

  constructor(all: Task[], usedFilter = FilterType.NONE) {
    this.#all = all;
    this.#usedFilter = usedFilter ?? FilterType.NONE;
  }

  get items() {
    return this.applyFilterTo(this.#all);
  }

  get quantity() {
    return this.items.length;
  }

  get filterUsed() {
    return this.#usedFilter;
  }

  addTask(newTask: Task): TasksList {
    const all = [...this.#all];
    all.push(newTask);
    return new TasksList(all, this.filterUsed)
  }

  modifyTask(modifiedTask: Task): TasksList {
    const all = this.#all.map(task => {
      return task.id === modifiedTask.id ? modifiedTask : task;
    });

    return new TasksList(all, this.filterUsed);
  } 

  removeCompleted(): TasksList {
    const onlyActive = this.#all.filter(task => task.active);
    return new TasksList(onlyActive, FilterType.NONE);
  }

  filterActive(): TasksList {
    if (!this.showActive()) {
      return new TasksList(this.#all, FilterType.ACTIVE)
    } else {
      return this
    }
  }

  filterCompleted(): TasksList {
    if (!this.showCompleted()) {
      return new TasksList(this.#all, FilterType.COMPLETED)
    } else {
      return this;
    }
  }

  removeFilter(): TasksList {
    if (!this.showAll()) {
      return new TasksList(this.#all, FilterType.NONE)
    } else {
      return this;
    }
  }

  showAll(): boolean {
    return this.#usedFilter === FilterType.NONE;
  }

  showActive(): boolean {
    return this.#usedFilter === FilterType.ACTIVE;
  }

  showCompleted(): boolean {
    return this.#usedFilter === FilterType.COMPLETED;
  }

  private applyFilterToActive(tasks: Task[]): Task[] {
    return tasks.filter(task => task.active)
  }

  private applyFilterToCompleted(tasks: Task[]): Task[] {
    return tasks.filter(task => task.completed)
  }

  private applyFilterTo(tasks: Task[]): Task[] {
    if (this.showActive()) {
      return this.applyFilterToActive(tasks);
    } else if (this.showCompleted()) {
      return this.applyFilterToCompleted(tasks);
    } else {
      return [...tasks]
    }
  }
}