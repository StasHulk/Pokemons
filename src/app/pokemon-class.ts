export class Pokemon{
    public abilities: string[];
    public stats: {
        "hp": number,
        "attack": number,
        "defense": number,
        "special-attack": number,
        "special-defense": number,
        "speed": number
    };
    public values: {
        "top": string,
        "right": number,
        "bottom": number,
        "left": number
    };
    public type: string;
    public img: string;
    public name: string;
    public base_experience: number;
    public height: number;
    public id: number;

    constructor(data: any){
        this.abilities = data.abilities;
        this.stats = data.stats;
        this.values = data.values;
        this.type = data.type;
        this.img = data.img;
        this.name = data.name;
        this.base_experience = data.base_experience;
        this.height = data.height;
        this.id = data.id;
    }
}