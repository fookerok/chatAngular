import { Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { MessageComponent } from './message/message.component';

export const routes: Routes = [
  { path: '', component: QuestionComponent },
  { path: 'message/:id', component: MessageComponent},
  { path: '**', redirectTo: '' }
];

