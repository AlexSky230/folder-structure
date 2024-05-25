import { Component, Input } from '@angular/core';
import { NodeModel } from 'src/app/models/node.model';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
})
export class FileComponent {
  @Input() parentNode: NodeModel;
  @Input() node: NodeModel;
}
