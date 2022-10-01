import { Component, Inject, OnInit } from '@angular/core';
import {Map, View} from 'ol';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import * as insertMap from 'ol/proj';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  createMap: Map = new Map;
  
  constructor() {}
    
  ngOnInit(): void {
    this.createMap = new Map({ 
     target:'map',
     layers:[
      new TileLayer({
      source:new OSM()
      })],
      view: new View({
        center: insertMap.fromLonLat([0,0]),
        zoom:3
      })
    });
  }

  
  update() {
  }
  
}
