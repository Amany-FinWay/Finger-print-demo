import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class FingerPrintSignalRService {
  private hubConnection!: signalR.HubConnection;

  constructor() {
    this.createConnection();
    this.startConnection();
  }

  private createConnection() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://your-server-url/fingerprintHub') // Replace with your SignalR hub URL
      .build();
  }

  private startConnection() {
    this.hubConnection
      .start()
      .then(() => console.log('SignalR Connection Established'))
      .catch(err => console.log('Error while starting connection: ' + err));
  }

  public addReceiveFingerprintListener() {
    this.hubConnection.on('ReceiveFingerprintData', (data: any) => {
      console.log('Received Fingerprint Data:', data);
      // Handle the fingerprint data as needed
    });
  }
}
