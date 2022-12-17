import { Raider } from './raider.model';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'


@Injectable({
  providedIn: 'root'
})
export class RaiderService {

  constructor(private angularFirestore: AngularFirestore) { }

  getRaiderDoc(id: any) {
    return this.angularFirestore
    .collection('raider-collection')
    .doc(id)
    .valueChanges()
  }

  getRaiderList(){
    return this.angularFirestore
    .collection('raider-collection')
    .snapshotChanges();
  }

  createRaider(raider: Raider){
    return new Promise<any>((resolve: any, reject: (arg0: any) => any) =>{
      this.angularFirestore
      .collection('raider-collection')
      .add(raider)
      .then(response => {console.log(response)}, error => reject(error))
    })
  }

  deleteRaider(raider: any){
    return this.angularFirestore
    .collection('raider-collection')
    .doc(raider.id)
    .delete();
  }

  updateRaider(raider: Raider, id: string | undefined){
    return this.angularFirestore
    .collection('raider-collection')
    .doc(id)
    .update({
      name: raider.name,
      email: raider.email,
      raid_name: raider.raid_name,
      gear_rank: raider.gear_rank,
    })
  }
}