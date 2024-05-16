export class ToDoModel{
    public name: string;
    public isChecked: boolean;
    public constructor(name: string, isChecked: boolean){
        this.name = name;
        this.isChecked = isChecked;
    }
}