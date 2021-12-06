import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-create-dialog",
  templateUrl: "./create-dialog.component.html",
  styleUrls: ["./create-dialog.component.scss"],
})
export class CreateDialogComponent implements OnInit {
  public store: { name: string; password: string } = { name: "", password: "" };

  constructor() {}

  ngOnInit(): void {}
}
