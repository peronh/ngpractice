export class EventModel {  // adatleíró modell osztály EventModel
    id: number;
    name: string;
    pic?: string;   // kép opcionálissá tétele

    constructor(name: string , id = 0,  pic = '') {   // példányosítom a newEventNameInput feltöltést
        this.id = id;                              // object assign = paraméterek felsorolása helyett, csak paramétert várok
        this.name = name;
        this.pic = pic;
    }
}
