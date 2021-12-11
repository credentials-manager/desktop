import { Component, OnInit } from "@angular/core";

import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";

import { ElectronService } from "../core/services/electron/electron.service";
import { CreateDialogComponent } from "./create-dialog/create-dialog.component";
import * as credman from "@credman/core";
import { Router } from "@angular/router";
import { DecryptDialogComponent } from "./decrypt-dialog/decrypt-dialog.component";

@Component({
  selector: "app-store",
  templateUrl: "./store.component.html",
  styleUrls: ["./store.component.scss"],
})
export class StoreComponent implements OnInit {
  public stores: credman.Store[];

  private credman: typeof credman;

  constructor(
    private dialog: MatDialog,
    private electronService: ElectronService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.credman = this.electronService.remote.require("@credman/core");

    this.stores = this.credman.Store.getAll();
  }

  ngOnInit(): void {}

  openStore(store: credman.Store): void {
    if (store.encrypted) {
      const dialogRef = this.dialog.open(DecryptDialogComponent);

      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          try {
            this.credman.Store.get(store.id, result);
          } catch (e) {
            this.snackBar.open(`Wrong password`, "Close", {
              duration: 5000,
            });
          }
        }
      });
    } else {
      this.router.navigate(["/credentials", store.id]);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(result);
        const store = new this.credman.Store(result.name);
        store.create(result.password);

        this.stores.push(store);

        this.snackBar.open(`Store '${result.name}' created`, "Close", {
          duration: 5000,
        });
      }
    });
  }
}
