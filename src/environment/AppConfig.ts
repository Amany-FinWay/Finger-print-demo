// app/app.config.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './environment'; // Adjust the path as necessary
import { AppConfigModel } from '../models/_common/AppConfigModel';
@Injectable({
  providedIn: 'root'
})
export class AppConfig {
  static config: AppConfigModel;

  constructor(private http: HttpClient) {}

  loadConfig() {
    const jsonFile = `assets/config.json`; // Use the correct path
    return new Promise<void>((resolve, reject) => {
      this.http.get<AppConfigModel>(jsonFile).subscribe(
        (response) => {
          AppConfig.config = response;
          resolve();
        },
        (error) => {
          console.error('Could not load configuration file:', error);
          reject(error);
        }
      );
    });
  }

  static returnApiUrl(): string {
    if (!this.config) {
      throw new Error('Configuration not loaded');
    }
    return `${this.config.serverURL}/api`;
  }
}

// Export a function to create the AppConfig instance
export function appConfigFactory(http: HttpClient) {
  const config = new AppConfig(http);
  return config.loadConfig().then(() => config);
}
export type { AppConfigModel };

