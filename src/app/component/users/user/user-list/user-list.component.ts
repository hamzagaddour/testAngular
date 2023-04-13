import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { User } from 'src/app/shared/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {


  users : User[] = [
    {
      id : 1,
      nom : "gaddour",
      prenom : "hamza",
      profession : "Developper"
    },
    {
      id : 1,
      nom : "gates",
      prenom : "bill",
      profession : "homme affaire"
    },
    {
      id : 1,
      nom : "elon",
      prenom : "mask",
      profession : "rocket men"
    }
  ]

  searchTab : string[] = ["adam", "jebril", "fatma"]
  search : string | any = ""

  constructor(private activatedRoute : ActivatedRoute, private router : Router){}

  ngOnInit(){
    this.activatedRoute.data.subscribe((data: any) =>{console.log(data)})
  }

  public redirect(user : User){

    this.router.navigate([user.id+"/edit"], {
      relativeTo : this.activatedRoute,

      queryParams : {
        nom : user.nom,
      },
      queryParamsHandling:"merge",
      fragment : "div"
    })
  }
}
