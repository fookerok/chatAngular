export class DataService{

    private data: string[] = ['dsad'];

    getData(): string[] {
        return this.data;
    }
    addData(name: string){
        this.data.push(name);
    }
}