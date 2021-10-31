import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-store",
  templateUrl: "./store.component.html",
  styleUrls: ["./store.component.scss"],
})
export class StoreComponent implements OnInit {
  public stores: { name: string; id: string }[] = [
    { name: "Store One", id: "asd" },
    { name: "Store Two", id: "asd2" },
  ];

  constructor() {}

  ngOnInit(): void {}
}
