import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CredentialRoutingModule } from "./credential-routing.module";

import { MatExpansionModule } from "@angular/material/expansion";
import { CredentialComponent } from "./credential.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [CredentialComponent],
  imports: [
    CommonModule,
    CredentialRoutingModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class CredentialModule {}
