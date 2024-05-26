import { Component, Input } from '@angular/core';
import { ENodeType } from 'src/app/enums/node-type.enum';
import { NodeModel } from 'src/app/models/node.model';
import { NodeCreateService } from 'src/app/services/node-create.service';
import { TreeDataService } from 'src/app/services/tree-data.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss'],
})
export class FolderComponent {
  @Input() parentNode: NodeModel;
  @Input() node: NodeModel;

  showControls = false;
  readonly nodeTypes = ENodeType;

  constructor(
    private treeDataService: TreeDataService,
    private nodeCreateService: NodeCreateService,
  ) {}

  get lastChildIndex() {
    return this.node?.children.length - 1;
  }

  addNewNode(preNode: Partial<NodeModel>, parentNode: NodeModel): void {
    this.treeDataService.addNewNode(preNode, parentNode);
    this.nodeCreateService.setActiveNodeId('');
  }
}
