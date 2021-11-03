import { Component, OnInit } from "@angular/core";
import { Credential } from "@credman/core";

@Component({
  selector: "app-create-dialog",
  templateUrl: "./create-dialog.component.html",
  styleUrls: ["./create-dialog.component.scss"],
})
export class CreateDialogComponent implements OnInit {
  public credential: Credential = {
    protocol: "",
    address: "",
    port: 80,
    username: "",
    password: "",
  };

  constructor() {}

  ngOnInit(): void {}
}
