import { ENodeType } from '../enums/node-type.enum';
import { NodeModel } from '../models/node.model';
import { TreeDataService } from './tree-data.service';

const mockChild = {
  name: 'child1',
  type: ENodeType.File,
  id: 'child1',
  children: [],
};

let initialTreeData: NodeModel;

const setup = (): TreeDataService => new TreeDataService();

describe('TreeDataService', () => {
  beforeEach(() => {
    initialTreeData = {
      name: 'root',
      type: ENodeType.Folder,
      id: 'root',
      children: [],
    };
  });

  it('should be created', () => {
    const service = setup();

    expect(service).toBeTruthy();
  });

  describe('setTreeData', () => {
    it('should set tree data', (done) => {
      const service = setup();

      service.setTreeData(mockChild);
      service.treeData$.subscribe((data) => {
        expect(data).toEqual(mockChild);
        done();
      });
    });
  });

  describe('addChild', () => {
    it('should add a child to the parent node', () => {
      const service = setup();

      service.addChild(mockChild, initialTreeData);

      expect(initialTreeData.children[0]).toEqual(mockChild);
    });
  });

  describe('addNewNode', () => {
    it('should add a new node to the parent node', () => {
      const service = setup();
      const parentNode: NodeModel = initialTreeData;
      const preNode = { name: 'newNode', type: ENodeType.File };

      service.addNewNode(preNode, parentNode);

      expect(parentNode.children.length).toBe(1);
      expect(parentNode.children[0].name).toBe(preNode.name);
      expect(parentNode.children[0].type).toBe(preNode.type);
      expect(parentNode.children[0].id).toEqual(expect.any(String));
      expect(parentNode.children[0].children.length).toEqual(0);
    });

    it('should not add a new node if preNode lacks name and type', () => {
      const service = setup();
      const parentNode: NodeModel = initialTreeData;
      const preNode = {};

      console.error = jest.fn();
      service.addNewNode(preNode, parentNode);

      expect(console.error).toHaveBeenCalledWith(
        'Name or Id not provided',
        preNode,
      );
      expect(parentNode.children.length).toBe(0);
    });

    it('should not add a new node if parent node is not provided', () => {
      const service = setup();
      const preNode = { name: 'newNode', type: ENodeType.File };

      console.log = jest.fn();
      service.addNewNode(preNode, null);
      expect(console.error).toHaveBeenCalledWith('No parent provided');
    });
  });

  describe('deleteNode', () => {
    it('should delete a node by id from the parent node', () => {
      const service = setup();
      const parentNode: NodeModel = {
        ...initialTreeData,
        children: [mockChild],
      };

      service.deleteNode(parentNode, 'child1');
      expect(parentNode.children.length).toBe(0);
    });

    it('should not delete if the node id is not found', () => {
      const service = setup();
      const parentNode: NodeModel = initialTreeData;

      console.error = jest.fn();
      service.deleteNode(parentNode, 'invalidId');
      expect(console.error).toHaveBeenCalledWith(
        `Node with ID 'invalidId' not found in parent node.`,
      );
    });
  });
});
