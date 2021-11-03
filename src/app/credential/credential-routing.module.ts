import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CredentialComponent } from "./credential.component";

const routes: Routes = [
  {
    path: "credentials/:id",
    component: CredentialComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CredentialRoutingModule {}
