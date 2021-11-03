import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import * as credman from "@credman/core";
import { ElectronService } from "../core/services/electron/electron.service";

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
    private route: ActivatedRoute
  ) {
    const store_id: string = this.route.snapshot.params.id;

    this.credman = this.electronService.remote.require("@credman/core");

    this.store = this.credman.Store.get(store_id);
  }

  ngOnInit(): void {}
}
