import { RaiderService } from './../raider.service';
import { Component } from '@angular/core';
import { Raider } from '../raider.model';


@Component({
  selector: 'app-list-raider',
  templateUrl: './list-raider.component.html',
  styleUrls: ['./list-raider.component.scss']
})
export class ListRaiderComponent {
  Raider !: Raider[];

  constructor(private raiderService: RaiderService) {}

  ngOnInit() {
    this.raiderService.getRaiderList().subscribe(res => {
      this.Raider = res.map(e => {
        return {
          id : e.payload.doc.id,
          ...e.payload.doc.data() as {}
        } as Raider;
      })
    })
  }

  removeRaider (Raider: any) {
    if(confirm("Are you sure you want to delete " + Raider.name)){
      this.raiderService.deleteRaider(Raider);
    }
  }

}
