export interface Feedback {
  id: number;
  senderName: string;
  senderEmail: string;
  title: string;
  content: string;
  sendDate: Date;
  processStatus: boolean;
}
