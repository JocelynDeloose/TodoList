export class Todo {
    id: number;
    name: string;
    description: string;
    priority: string;

    constructor(id: number, name: string, description: string, priority: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.priority = priority;
    }
}