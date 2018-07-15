import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { GraphVisualizationActions } from '../store/actions/graph-visualization.action';
import { getGraphNodes, getGraphEdges } from '../store/selectors/graph-visualization-state.selector';
import { Observable } from 'rxjs';

export interface IPoint {
  x;
  y;
}

@Component({
  selector: 'sl-graph-visualization',
  templateUrl: './graph-visualization.component.html',
  styleUrls: ['./graph-visualization.component.scss']
})
export class GraphVisualizationComponent implements OnInit {
  @ViewChild('myCanvas') canvasRef: ElementRef;
  @ViewChild('tooltip') tooltipRef: ElementRef;
  public platforms: IPoint[] = [];
  public platformSize = 100;
  public platformWidth = 500;
  public platformHeight = 500;
  public displayPopup = false;
  public node = null;
  public styles = null;
  public evt = null;
  private nodes = [];
  private lines = [];
  constructor(private store: Store<any>,
    private actions: GraphVisualizationActions) { }

  ngOnInit() {
    const context: CanvasRenderingContext2D = this.canvasRef.nativeElement.getContext('2d');

    this.store.dispatch(this.actions.load.init());
    Observable.combineLatest(this.store.select(getGraphEdges), this.store.select(getGraphNodes))
      .filter(([edges, nodes]) => edges.length > 0 && nodes.length > 0)
      .take(1).subscribe(([edges, nodes]) => {
        context.clearRect(0, 0, this.platformWidth, this.platformHeight);
        context.strokeStyle = 'rgb(0,0,0)';
        this.generatePlatforms(nodes);

        nodes.forEach((value) => this.drawNode(context, value));
        this.nodes = nodes;
        const lines = edges.map((edge) => {
          return {
            ...edge,
            from: nodes.find((node) => node.id === edge.from),
            to: nodes.find((node) => node.id === edge.to)
          };
        });
        lines.forEach((line) => this.drawLine(context, line, line.from, line.to));
      });
    context.restore();
    this.canvasRef.nativeElement.addEventListener('mousemove', (evt) => {
      this.displayPopup = false;
      const { x, y } = this.getMousePos(this.canvasRef.nativeElement, evt);
      this.nodes.forEach((node) => {
        if (x >= node.x - 5 && x <= node.x + 5 && y >= node.y - 5 && y <= node.y + 5) {
          this.displayPopup = true;
          this.node = node;
          this.styles = {
            left: (evt.clientX - this.tooltipRef.nativeElement.clientWidth / 2) + 'px',
            top: (evt.clientY - (this.tooltipRef.nativeElement.clientHeight + 10)) + 'px'
          };
          this.evt = { x: evt.clientX, y: evt.clientY };
        }
      });
    }, false);
  }

  generatePlatforms(nodes) {
    const k = nodes.length;
    let placed = 0,
      maxAttempts = k * 10;
    while (placed < k && maxAttempts > 0) {
      const x = Math.floor(Math.random() * (this.platformWidth - 100));
      const y = Math.floor(Math.random() * (this.platformHeight - 100));
      let available = true;
      this.platforms.forEach((point) => {
        if (Math.abs(point.x - x) < this.platformSize && Math.abs(point.y - y) < this.platformSize) {
          available = false;
          return;
        }
      });
      if (available) {
        this.platforms.push({
          x: x,
          y: y
        });
        nodes[placed].x = x;
        nodes[placed].y = y;
        placed += 1;
      }
      maxAttempts -= 1;
    }
  }

  drawNode(context, position) {
    context.beginPath();
    context.arc(position.x, position.y, 5, 0, 2 * Math.PI, false);
    context.closePath();
    context.stroke();
    context.fill();
    context.fillText(position.name, position.x, position.y - 10);
  }

  drawLine(context, line, startPosition, endPosition) {
    context.beginPath();
    context.moveTo(startPosition.x, startPosition.y);
    context.lineTo(endPosition.x, endPosition.y);
    context.closePath();
    context.stroke();
    context.fill();
    if (line.name) {
      context.fillText(line.name, (startPosition.x + endPosition.x) / 2, (startPosition.y + endPosition.y) / 2);
    }
  }

  getMousePos(canvas, evt) {
    const rect = canvas.getBoundingClientRect(), // abs. size of element
      scaleX = canvas.width / rect.width, // relationship bitmap vs. element for X
      scaleY = canvas.height / rect.height; // relationship bitmap vs. element for Y

    return {
      x: (evt.clientX - rect.left) * scaleX, // scale mouse coordinates after they have
      y: (evt.clientY - rect.top) * scaleY // been adjusted to be relative to element
    };
  }
}
