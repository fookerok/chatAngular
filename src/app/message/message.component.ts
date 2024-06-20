import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MessagesService } from '../service/message.service';
import { IMessages, ISms, IFiles } from '../models/message.models';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit, OnDestroy {
  sms: ISms[] = [];
  name: string = "";
  selectedFiles: File[] = [];
  smsSubscription: Subscription | undefined;
  currentUser: string = 'Дмитрий Гуленков';

  constructor(private route: ActivatedRoute, private messagesService: MessagesService) { }

  addItem() {
    if (this.name.trim() !== '' || this.selectedFiles.length > 0) {
      const newFiles: IFiles[] = this.selectedFiles.map((file, index) => ({
        id: Date.now() + index,
        fileName: file.name,
        messageId: 0,
        fileSize: file.size,
        url: ''
      }));

      const newMessage: ISms = {
        id: Date.now(),
        userName: this.currentUser,
        text: this.name,
        files: newFiles,
        date: new Date().toLocaleTimeString(),
        isMy: true
      };

      this.sms.push(newMessage);
      this.name = "";
      this.selectedFiles = [];
    }
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const id = +idParam;
      this.smsSubscription = this.messagesService.getMessageById(id).subscribe({
        next: (data: IMessages) => {
          this.sms = data.sms;
        }
      });
    } 
  }

  ngOnDestroy(): void {
    if (this.smsSubscription) {
      this.smsSubscription.unsubscribe();
    }
  }

  isMyMessage(message: ISms): boolean {
    return message.isMy; // Используем поле isMy из данных
  }

  onFilesSelected(files: File[]) {
    this.selectedFiles = [...this.selectedFiles, ...files];
  }

  onFileRemoved(file: File) {
    this.selectedFiles = this.selectedFiles.filter(f => f !== file);
  }

  getFileUrl(file: IFiles): string {
    // Временно создаем объект URL, этот URL будет работать только в текущей сессии
    return URL.createObjectURL(new File([], file.fileName));
  }
}
