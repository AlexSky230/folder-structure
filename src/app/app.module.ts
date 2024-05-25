import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateNodeComponent } from './components/create-node/create-node.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './resources/materials.module';
import { RootFolderComponent } from './components/root-folder/root-folder.component';
import { FolderComponent } from './components/folder/folder.component';
import { FileComponent } from './components/file/file.component';
import { NodeControlsComponent } from './components/node-controls/node-controls.component';
import { JsonRepresentationComponent } from './components/json-representation/json-representation.component';
import { HeaderComponent } from './components/header/header.component';

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
