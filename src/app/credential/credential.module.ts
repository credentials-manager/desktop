import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CredentialRoutingModule } from "./credential-routing.module";

import { MatExpansionModule } from "@angular/material/expansion";
import { CredentialComponent } from "./credential.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatDividerModule } from "@angular/material/divider";
import { MatDialogModule } from "@angular/material/dialog";

import { CreateDialogComponent } from "./create-dialog/create-dialog.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [CredentialComponent, CreateDialogComponent],
  imports: [
    CommonModule,
    CredentialRoutingModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatSelectModule,
    MatDialogModule,
    MatDividerModule,
    MatInputModule,
  ],
})
export class CredentialModule {}
