import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NodeCreateService {
  private readonly activeNodeIdSource$ = new BehaviorSubject<string>('');
  readonly activeNodeId$ = this.activeNodeIdSource$.asObservable();

  setActiveNodeId(nodeId: string): void {
    this.activeNodeIdSource$.next(nodeId);
  }
}
