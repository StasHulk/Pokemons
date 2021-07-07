
export interface IPokemon{
    abilities: string[];
    stats: {
        "hp": number,
        "attack": number,
        "defense": number,
        "special-attack": number,
        "special-defense": number,
        "speed": number,
    };
    type: string;
    img: string;
    name: string;
    base_experience: number;
    height: number;
    id: number;
    values:{
        "top": string,
        "right": number,
        "bottom": number,
        "left": number,  
    };
}