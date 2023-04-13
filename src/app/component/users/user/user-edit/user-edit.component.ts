import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  nom : string | any = ""
  id : number | undefined
  constructor(private activatedRoute : ActivatedRoute){}
  // ngAfterViewInit(): void {
  //   this.activatedRoute.paramMap.subscribe((paramMap : ParamMap)=>{
  //     this.nom = paramMap.get('nom')
  //   })
  // }

  ngOnInit(): void {
    console.log(this.activatedRoute)
    this.activatedRoute.params.subscribe((param: Params)=>{
      this.id = param['id'];
    })

    this.activatedRoute.queryParamMap.subscribe((paramsMap : ParamMap)=>{
      this.nom = paramsMap.get("nom")
    })
  }
}
