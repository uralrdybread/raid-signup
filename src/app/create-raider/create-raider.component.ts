import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RaiderService } from '../raider.service';



@Component({
  selector: 'app-create-raider',
  templateUrl: './create-raider.component.html',
  styleUrls: ['./create-raider.component.scss']
})
export class CreateRaiderComponent {
 
  public raiderForm: FormGroup;

  constructor(
    public raiderService: RaiderService,
    public formBuilder: FormBuilder,
    public router: Router
  ) {
    this.raiderForm = this.formBuilder.group({
      name: [''],
      email: [''],
      raid_name: [''],
      gear_rank: [''],
    })

  }

  ngOnInit(): void {

  }

  onSubmit(){
    this.raiderService.createRaider(this.raiderForm.value)
    this.router.navigate(['list-raider'])
  }

}
