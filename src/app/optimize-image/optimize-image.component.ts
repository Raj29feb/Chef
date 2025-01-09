import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-optimize-image',
  imports: [NgOptimizedImage],
  templateUrl: './optimize-image.component.html',
  styleUrl: './optimize-image.component.css'
})
export class OptimizeImageComponent {
imageUrl="treeone.jpeg";
alt="tree-img";
}
