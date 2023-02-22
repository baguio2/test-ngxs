import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CountComponent } from './count/count.component';
import { ShowCountComponent } from './show-count/show-count.component';

// NGXS
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { States, StorageOptions } from './store/state';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent, CountComponent, ShowCountComponent],
  imports: [
    BrowserModule,
    NgbModule,

    // NGXS
    NgxsModule.forRoot(States, { developmentMode: !environment.production }),

    // NGXS Pluggins
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production,
    }),
    NgxsLoggerPluginModule.forRoot({
      disabled: environment.production,
    }),
    NgxsStoragePluginModule.forRoot({ key: StorageOptions }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
