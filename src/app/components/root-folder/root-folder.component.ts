import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NodeModel } from 'src/app/models/node.model';
import { NodeCreateService } from 'src/app/services/node-create.service';
import { TreeDataService } from 'src/app/services/tree-data.service';

@Component({
  selector: 'app-root-folder',
  templateUrl: './root-folder.component.html',
  styleUrls: ['./root-folder.component.scss'],
})
export class RootFolderComponent implements OnInit {
  activeNodeId$: Observable<string>;
  rootNode$ = this.treeDataService.treeData$;

  constructor(private treeDataService: TreeDataService, private nodeCreateService: NodeCreateService) {}

  ngOnInit(): void {
    this.activeNodeId$ = this.nodeCreateService.activeNodeId$;
  }

  addNewNode(preNode: Partial<NodeModel>, parentNode: NodeModel): void {
    const newNode = this.treeDataService.getNode(preNode);
    this.treeDataService.addChild(newNode, parentNode);
  }

  setActiveNodeId(nodeId: string): void {
    this.nodeCreateService.setActiveNodeId(nodeId);
  }
}
