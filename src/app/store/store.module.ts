import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StoreRoutingModule } from "./store-routing.module";
import { StoreComponent } from "./store.component";

import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { CreateDialogComponent } from "./create-dialog/create-dialog.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [StoreComponent, CreateDialogComponent],
  imports: [
    CommonModule,
    StoreRoutingModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
  ],
})
export class StoreModule {}
