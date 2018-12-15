import { Component} from '@angular/core';
import {EventModel} from './event-model';

@Component({
  selector: 'app-listdemo',
  templateUrl: './listdemo.component.html',
  styleUrls: ['./listdemo.component.css']
})

export class ListdemoComponent {

    events: EventModel[];
    modifyEvent: EventModel;

    // tömbnek events változó megadva    Eventmodel typescript
  constructor() {
    this.events = [
        {
          id: 1,
          name: 'sziget',
          pic: 'http://www.erdon.ro/2018/04/index111-1.jpg'
        },      {
          id: 2,
          name: 'fezen',
          pic: 'http://teleelettel.hu/files/frontend/events/cover/141e6f5a3c50ab4c6cebe9820226934e.jpg'
        },      {
          id: 3,
          name: 'rockmaraton',
          pic: 'https://m.blog.hu/re/recorder/image//rockamarotn_flyer_650.jpg'
        },
    ];
    console.log('listdemo');
    this.modifyEvent = new EventModel('');
  }

  add(newEventNameInput: HTMLInputElement, newEventPicInput: HTMLInputElement)  {// hozzáadás funkció sor végére, utolsó id alapján
      if (this.modifyEvent.id === 0) { // új elemet akarunk létrehozni
          const maxId = this.events.reduce((x, y) => x.id > y.id ? x : y).id; // megvizsgáljuk az events tömbben, ha az x id > y id
          this.events = [...this.events, new EventModel(newEventNameInput.value, maxId + 1, newEventPicInput.value)];
      } else {
          this.events = this.events.map((ev) => { // megkeressük az aktuálist
              if (ev.id === this.modifyEvent.id) {
                  return {
                      id: ev.id,
                      name: newEventNameInput.value,
                      pic: newEventPicInput.value
                  };
              } else {
                  return ev;
              }
          });
          this.modifyEvent = new EventModel('');
      }
    newEventNameInput.value = ''; // küldést követően üres lesz az inputmező
    newEventPicInput.value = '';
  }

  edit(id: number) {
      this.modifyEvent = this.events.filter((ev) => ev.id === id)[0];
  }

  delete(id: number ) {// törlés funkció létrehozása id alapján
    this.events = this.events.filter((ev: EventModel) => ev.id !== id);
  }

}
