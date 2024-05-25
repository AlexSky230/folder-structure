import { Component, Input } from '@angular/core';
import { ENodeType } from 'src/app/enums/node-type.enum';
import { NodeModel } from 'src/app/models/node.model';
import { NodeCreateService } from 'src/app/services/node-create.service';
import { TreeDataService } from 'src/app/services/tree-data.service';

@Component({
  selector: 'app-node-controls',
  templateUrl: './node-controls.component.html',
  styleUrls: ['./node-controls.component.scss'],
})
export class NodeControlsComponent {
  @Input() parentNode: NodeModel;
  @Input() nodeId: string;
  @Input() nodeType: ENodeType = ENodeType.Folder;

  readonly nodeTypes = ENodeType;

  constructor(
    private treeDataService: TreeDataService,
    private nodeCreateService: NodeCreateService
  ) {}

  deleteNode(parentNode: NodeModel, nodeId: string): void {
    this.treeDataService.deleteNode(parentNode, nodeId);
  }

  setActiveNodeId(activeNodeId: string): void {
    this.nodeCreateService.setActiveNodeId(activeNodeId);
  }
}
