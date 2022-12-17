import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RaiderService } from '../raider.service';

@Component({
  selector: 'app-edit-raider',
  templateUrl: './edit-raider.component.html',
  styleUrls: ['./edit-raider.component.scss']
})
export class EditRaiderComponent implements OnInit {

  public editForm: FormGroup;
  raiderRef: any;

  constructor(
    public raiderService: RaiderService,
    public formBuilder: FormBuilder,
    private act: ActivatedRoute,
    private router: Router
  ){
    this.editForm = this.formBuilder.group({
      name: [''],
      email: [''],
      raid_name: [''],
      gear_rank: [''],
    })
  }

  ngOnInit(): void {
    const id = this.act.snapshot.paramMap.get("id");

    this.raiderService.getRaiderDoc(id).subscribe(res => {

      this.raiderRef = res;
      this.editForm = this.formBuilder.group({
        name:[this.raiderRef.name],
        email:[this.raiderRef.email],
        student_course:[this.raiderRef.raid_name],
        gear_rank:[this.raiderRef.gear_rank]
      })
    })
  }

  onSubmit(){
    const id = this.act.snapshot.paramMap.get('id');

    this.raiderService.updateRaider(this.editForm?.value, id);
    this.router.navigate(['list-dent']);
  };

}
