import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuillModule } from 'ngx-quill';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { DataService } from './service/data.service';
import { HeaderComponent } from './header/header.component';
import { UploadComponent } from './upload/upload.component';
import { FilesComponent } from './files/files.component';
import { QuestionComponent } from './question/question.component';
import { routes } from './app.routes';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MessagesService } from './service/message.service';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MessageComponent,
    UploadComponent,
    FilesComponent,
    QuestionComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    QuillModule.forRoot({
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline'],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }],
          ['link', 'file'],
          [{ 'align': [] }]
        ]
      },
      placeholder: 'Введите текст...',
      theme: 'snow'
    }),
    RouterModule.forRoot(routes)
  ],
  providers: [
    DataService,MessagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
