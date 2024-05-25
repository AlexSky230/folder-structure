import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateNodeComponent } from './components/create-node/create-node.component';
import { FileComponent } from './components/file/file.component';
import { FolderComponent } from './components/folder/folder.component';
import { HeaderComponent } from './components/header/header.component';
import { JsonRepresentationComponent } from './components/json-representation/json-representation.component';
import { NodeControlsComponent } from './components/node-controls/node-controls.component';
import { RootFolderComponent } from './components/root-folder/root-folder.component';
import { MaterialsModule } from './resources/materials.module';

@NgModule({
  declarations: [
    AppComponent,
    CreateNodeComponent,
    RootFolderComponent,
    FolderComponent,
    FileComponent,
    NodeControlsComponent,
    JsonRepresentationComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    MaterialsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
