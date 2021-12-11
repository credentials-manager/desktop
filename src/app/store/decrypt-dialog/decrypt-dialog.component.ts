import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-decrypt-dialog",
  templateUrl: "./decrypt-dialog.component.html",
  styleUrls: ["./decrypt-dialog.component.scss"],
})
export class DecryptDialogComponent implements OnInit {
  public password: string = "";

  constructor() {}

  ngOnInit(): void {}
}
