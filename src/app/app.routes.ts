import { Routes } from '@angular/router';
import { FingerPrintComponent } from '../finger-print/finger-print.component';
import { HomeComponent } from '../home/home.component';
import { DocumentScannerComponent } from '../document-scanner/document-scanner.component';
import { ThankYouComponent } from '../thank-you/thank-you.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'finger-print', component: FingerPrintComponent},
    {path: 'document-scanner', component: DocumentScannerComponent},
    {path: 'thank-you', component: ThankYouComponent}
];
