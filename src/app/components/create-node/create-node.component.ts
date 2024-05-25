import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ENodeType } from 'src/app/enums/node-type.enum';
import { NodeModel } from 'src/app/models/node.model';
import { NodeCreateService } from 'src/app/services/node-create.service';

@Component({
  selector: 'app-create-node',
  templateUrl: './create-node.component.html',
  styleUrls: ['./create-node.component.scss'],
})
export class CreateNodeComponent {
  @Input() set isRoot(isRoot: boolean) {
    if (isRoot) {
      this.type.patchValue(ENodeType.Folder);
    }
  }
  @Input({ required: true }) nodeId: string;
  @Output() create = new EventEmitter<Partial<NodeModel>>();

  activeNodeId$ = this.nodeCreateService.activeNodeId$;
  nodeTypes = ENodeType;
  type = new FormControl<ENodeType>(null, Validators.required);

  form = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    type: this.type,
  });

  constructor(private nodeCreateService: NodeCreateService) {}

  createNode(): void {
    if (this.form.valid) {
      this.create.emit(this.form.value);
    } else {
      console.error('Name and Type required');
    }
    this.close();
  }

  close(): void {
    this.form.reset();
    this.nodeCreateService.setActiveNodeId('');
  }

  setType(type: ENodeType): void {
    this.type.patchValue(type);
  }
}
