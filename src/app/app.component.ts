import { Component } from '@angular/core';
import { NodeModel } from './models/node.model';
import { TreeDataService } from './services/tree-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly treeData$ = this.nodeService.treeData$;

  constructor(private nodeService: TreeDataService) {}
}
