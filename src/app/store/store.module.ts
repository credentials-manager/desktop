import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StoreRoutingModule } from "./store-routing.module";
import { StoreComponent } from "./store.component";

import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [StoreComponent],
  imports: [CommonModule, StoreRoutingModule, MatListModule, MatIconModule],
})
export class StoreModule {}
