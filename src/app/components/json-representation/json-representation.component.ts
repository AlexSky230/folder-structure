import { Component, Input } from '@angular/core';
import { NodeModel } from 'src/app/models/node.model';

@Component({
  selector: 'app-json-representation',
  templateUrl: './json-representation.component.html',
  styleUrls: ['./json-representation.component.scss'],
})
export class JsonRepresentationComponent {
  @Input() treeData: NodeModel;
}
