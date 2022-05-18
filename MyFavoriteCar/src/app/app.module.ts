import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { GetTypePipe } from './get-type.pipe';
import { HighlightDirective } from './highlight.directive';
import { CreateContentComponent } from './create-content/create-content.component';
import { FormsModule } from '@angular/forms';
import { TestChildComponent } from './test-child/test-child.component';
import { TestParentComponent } from './test-parent/test-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    ContentCardComponent,
    ContentListComponent,
    GetTypePipe,
    HighlightDirective,
    CreateContentComponent,
    TestChildComponent,
    TestParentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
