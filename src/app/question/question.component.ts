import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessagesService } from '../service/message.service';
import { IMessages } from '../models/message.models';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, OnDestroy {
  messages: IMessages[] = [];
  messagesSubscription: Subscription;

  constructor(private messagesService: MessagesService) {}

  ngOnInit(): void {
    this.messagesSubscription = this.messagesService.getMessages().subscribe((data) => {
      this.messages = data;
    });
  }

  ngOnDestroy(): void {
    if (this.messagesSubscription) {
      this.messagesSubscription.unsubscribe();
    }
  }
}
