import { Component, OnInit } from "@angular/core";
import { producto } from "src/app/interface/Producto";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  listProductos: producto[] = [
    {
      id: 1,
      titulo: "Fideos",
      marca: "Carozy",
      fechacreacion: new Date(),
      tipoproducto: "No perecible",
      descripcion: "Fideos largos del numero 5"
    },
    {
      id: 2,
      titulo: "Arroz",
      marca: "vitali",
      fechacreacion: new Date(),
      tipoproducto: "No perecible",
      descripcion: "Arroz de grano  numero 5"
    }
  ];

  ngOnInit(): void {}
}
