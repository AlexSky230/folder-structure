import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ENodeType } from '../enums/node-type.enum';
import { NodeModel } from '../models/node.model';

@Injectable({
  providedIn: 'root',
})
export class TreeDataService {
  private treeDataSource$ = new BehaviorSubject<NodeModel>({
    name: 'root',
    type: ENodeType.Folder,
    id: 'root',
    children: [],
  });

  readonly treeData$ = this.treeDataSource$.asObservable();
  addChild(newNode: NodeModel, parentNode: NodeModel) {
    parentNode.children.unshift(newNode);
    this.treeDataSource$.next(parentNode);
  }

  setTreeData(treeData: NodeModel): void {
    this.treeDataSource$.next(treeData);
  }

  addNewNode(preNode: Partial<NodeModel>, parentNode: NodeModel): void {
    console.log(preNode);

    if (!preNode?.name && !preNode?.type) {
      console.error('Name or Id not provided', preNode);
      return;
    }

    const { name, type } = preNode;
    const newNode = new NodeModel(type, name);

    if (!parentNode) {
      console.log('no parent provided');
      return;
    }

    parentNode.children.unshift(newNode);
  }

  getNode(preNode: Partial<NodeModel>): NodeModel | null {
    if (!preNode?.name && !preNode?.type) {
      console.error('Name or Id not provided', preNode);
      return null;
    }

    const { name, type } = preNode;
    return new NodeModel(type, name);
  }

  deleteNode(parentNode: NodeModel, nodeToDeleteId: string): void {
    const index = parentNode.children?.findIndex(
      (node) => node.id === nodeToDeleteId
    );
    if (index !== -1) {
      parentNode.children.splice(index, 1);
    } else {
      console.error(
        `Node with ID '${nodeToDeleteId}' not found in parent node.`
      );
    }
  }
}
