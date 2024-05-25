import { ENodeType } from '../enums/node-type.enum';

export class NodeModel {
  type: ENodeType | null;
  name?: string;
  children?: NodeModel[];
  id: string;

  constructor(type: ENodeType, name?: string, children?: NodeModel[]) {
    this.type = type || ENodeType.Folder;
    this.name = name || '';
    this.children = children || [];
    this.id = Date.now().toString(); // ideally we need to use uuid library
  }
}
