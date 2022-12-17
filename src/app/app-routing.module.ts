import { EditRaiderComponent } from './edit-raider/edit-raider.component';
import { ListRaiderComponent } from './list-raider/list-raider.component';
import { CreateRaiderComponent } from './create-raider/create-raider.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/create', pathMatch: 'full' },
  { path: 'create', component: CreateRaiderComponent},
  { path: 'list-raider', component: ListRaiderComponent},
  { path: 'update-raider/:id', component: EditRaiderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
