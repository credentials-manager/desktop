import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import * as credman from "@credman/core";
import { ElectronService } from "../core/services/electron/electron.service";
import { CreateDialogComponent } from "../credential/create-dialog/create-dialog.component";

@Component({
  selector: "app-credential",
  templateUrl: "./credential.component.html",
  styleUrls: ["./credential.component.scss"],
})
export class CredentialComponent implements OnInit {
  public store: credman.Store;
  private credman: typeof credman;

  constructor(
    private electronService: ElectronService,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {
    const store_id: string = this.route.snapshot.params.id;

    this.credman = this.electronService.remote.require("@credman/core");

    this.store = this.credman.Store.get(store_id);
  }

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.store.addCredential(result);
      }
    });
  }
}
