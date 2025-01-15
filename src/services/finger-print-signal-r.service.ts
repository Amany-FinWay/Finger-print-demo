import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { AppConfig } from '../environment/AppConfig';

@Injectable({
  providedIn: 'root'
})
export class FingerPrintSignalRService {
  private hubConnection!: signalR.HubConnection;

  constructor(
    private httpClient: HttpClient
  ) {
    //this.createConnection();
    //this.startConnection();
  }

  // private createConnection() {
  //   this.hubConnection = new signalR.HubConnectionBuilder()
  //     .withUrl('https://your-server-url/fingerprintHub') // Replace with your SignalR hub URL
  //     .build();
  // }

  // private startConnection() {
  //   this.hubConnection
  //     .start()
  //     .then(() => console.log('SignalR Connection Established'))
  //     .catch(err => console.log('Error while starting connection: ' + err));
  // }

  // public addReceiveFingerprintListener() {
  //   this.hubConnection.on('ReceiveFingerprintData', (data: any) => {
  //     console.log('Received Fingerprint Data:', data);
  //     // Handle the fingerprint data as needed
  //   });
  // }

  public A4Scanner() {
   // return this.httpClient.get(`${AppConfig.returnApiUrl()}/A4Scanner/scan`);
    return this.httpClient.get(`https://localhost:7119/api/A4Scanner/scan`);
  }
}
