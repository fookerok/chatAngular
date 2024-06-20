import { Component, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './Upload.component.html',
  styleUrls: ['./Upload.component.css']
})
export class UploadComponent {
  @Output() filesSelected = new EventEmitter<File[]>();

  onFileSelected(event: any) {
    const files: FileList = event.target.files;
    this.filesSelected.emit(Array.from(files));
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    (event.currentTarget as HTMLElement).classList.add('dragover');
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    (event.currentTarget as HTMLElement).classList.remove('dragover');
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    (event.currentTarget as HTMLElement).classList.remove('dragover');

    if (event.dataTransfer) {
      const files: FileList = event.dataTransfer.files;
      this.filesSelected.emit(Array.from(files));
    }
  }
  
}
