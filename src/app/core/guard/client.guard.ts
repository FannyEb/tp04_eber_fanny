import { Injectable } from '@angular/core';
import { Select } from '@ngxs/store';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
  } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ClientService } from '../service/client/client.service';
  
  @Injectable()
  export class ClientGuard implements CanActivate {
  
    constructor(private clientService: ClientService) {}

    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
      return this.clientService.getNbClients() > 0;
    }
  }