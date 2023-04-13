import { Action, ActionReducerMap, createAction, createReducer, on, props } from "@ngrx/store";
import {Actions, createEffect, ofType} from "@ngrx/effects"
import { User } from "../user.interface";
import { mergeMap } from "rxjs";


export interface AppState{
  users : {
    data : User[]
  }
}


export const USERS_INITIAL_State = {
  data : [
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
}

const listUsersAction = createAction("[USERS] list Users")

export const usersReducer = createReducer(USERS_INITIAL_State,
  on(listUsersAction,(state, action):any=>{
    return {
      ...state,
      data : action
    }
  })
)




export const ROOT_REDUCERS : ActionReducerMap<AppState, Action> = {
  users : usersReducer,
}

