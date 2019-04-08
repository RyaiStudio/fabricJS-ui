import {fabric} from 'fabric'

export default {
  init() {
    this.variables();
    this.events();
  },

  variables() {
    this.Canvas = new fabric.Canvas('canvas-container');
    this.$ediContent = document.getElementsByClassName('editor-content');
  },

  events() {

    this.resizeCanvas();
  },

  resizeCanvas() {
    this.Canvas.setHeight(this.$ediContent.offsetHeight);
    this.Canvas.setWidth(this.$ediContent.offsetWidth);
    this.Canvas.renderAll();
  }

}