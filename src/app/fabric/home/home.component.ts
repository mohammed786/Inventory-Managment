import { Component, OnInit, AfterViewInit } from '@angular/core';
declare const fabric: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() { }
  shape: any;
  left: number;
  top1: number;
  height: number;
  width: number;
  isDown: boolean = false;
  canvas: any;
  ngAfterViewInit() {
    console.log('From home compoenent');
    const that = this;
    this.canvas = new fabric.Canvas('canvas')
    this.canvas.setHeight(window.innerHeight);
    this.canvas.setWidth(window.innerWidth);
    this.canvas.renderAll();
    this.canvas.on({
      'mouse:down': (e) => {
        console.log('Mouse Down');
        that.isDown = true;
        that.left = e.absolutePointer.x;
        that.top1 = e.absolutePointer.y;
      },
      'mouse:up': (e) => {
        that.isDown = false;
        console.log(e)
        if (e.pointer) {
          that.drawShape(e.pointer.x - that.left, e.pointer.y - that.top1);
        }
      },
      'mouse:move': (e) => {
        if (!that.isDown) return;
        const pointer = that.canvas.getPointer(e);
        // that.circle.set({ radius: Math.abs(that.origX - pointer.x) });
        // that.canvas.renderAll();
      },
      'path:created': (e) => {
        var your_path = e.path;
        // this.canvas.isDrawingMode = false;
        // ... do something with your path
      }
    });

    this.canvas.on('mouse:up', (e) => {

    })
    this.canvas.observe('mouse:move', function (o) {

    });
  }
  ngOnInit() {
  }

  getShape(id) {
    switch (id) {
      case 'rect':
        this.shape = new fabric.Rect();
        break;
      case 'circle':
        this.shape = new fabric.Circle();
        break;
      case 'drawing':
        this.shape = new fabric.PatternBrush();
        this.canvas.isDrawingMode = true;
        break;
    }
  }
  drawShape(width, height) {
    if (this.shape) {
      switch (this.shape.type) {
        case 'rect':
          this.shape.set({
            left: this.left,
            top: this.top1,
            fill: 'red',
            width: width,
            height: height
          });
          break;
        case 'circle':
          this.shape.set({
            radius: width / 2, fill: 'green', left: this.left, top: this.top1
          });
          break;
      }
      this.canvas.add(this.shape);
    }
  }

  clearValues() {
    this.shape = null;
    this.left = 0;
    this.top1 = 0;
    this.height = 0;
    this.width = 0;
    this.isDown = false;
  }

}
