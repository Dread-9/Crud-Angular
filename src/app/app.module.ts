import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AgregareditarComponent } from "./components/agregareditar/agregareditar.component";
import { ListComponent } from "./components/list/list.component";
import { VerComponent } from "./components/ver/ver.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AgregareditarComponent,
    ListComponent,
    VerComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
