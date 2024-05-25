import { Injectable } from '@angular/core';
import { NodeModel } from '../models/node.model';
import { BehaviorSubject } from 'rxjs';
import { ENodeType } from '../enums/node-type.enum';

@Injectable({
  providedIn: 'root',
})
export class TreeDataService {
  private treeDataSource$ = new BehaviorSubject<NodeModel>({
    name: 'root',
    type: ENodeType.Folder,
    id: 'root',
    children: [
      {
        type: ENodeType.Folder,
        name: 'ghjg',
        children: [],
        id: '1716650259334',
      },
      {
        type: ENodeType.Folder,
        name: 'gfjghj',
        children: [
          {
            type: ENodeType.Folder,
            name: 'ghjghj',
            children: [
              {
                type: ENodeType.Folder,
                name: 'ffff',
                children: [],
                id: '1716650250329',
              },
              {
                type: ENodeType.Folder,
                name: 'ghjgh',
                children: [
                  {
                    type: ENodeType.Folder,
                    name: 'ggg',
                    children: [],
                    id: '1716650254657',
                  },
                ],
                id: '1716650247633',
              },
              {
                type: ENodeType.Folder,
                name: 'ghjg',
                children: [],
                id: '1716650243823',
              },
            ],
            id: '1716650236908',
          },
          {
            type: ENodeType.File,
            name: 'ghjgh',
            children: [],
            id: '1716650233916',
          },
          {
            type: ENodeType.Folder,
            name: 'ghjgh',
            children: [],
            id: '1716650231382',
          },
          {
            type: ENodeType.Folder,
            name: 'fghjg',
            children: [
              {
                type: ENodeType.Folder,
                name: 'ghjg',
                children: [],
                id: '1716650228984',
              },
            ],
            id: '1716650225959',
          },
        ],
        id: '1716650223697',
      },
    ],
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
