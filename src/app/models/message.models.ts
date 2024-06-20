export interface ISms {
	id: number;
	date: string;
	userName: string;
	text: string;
	isMy: boolean;
	files:IFiles[];
}
export interface IFiles{
	[x: string]: any;
	id: number;
	fileName: string;
	messageId: number;
	fileSize: number;
	url: string;
}
export interface IMessages {
	id: number;
	subject: string;
	sms: ISms[];
}

