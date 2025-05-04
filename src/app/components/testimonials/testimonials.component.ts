import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent implements OnInit {
  testimonials = [
    {
      quote: "Working with RD Interiors was an amazing experience. They transformed our home into a stylish and functional space!",
      author: "John Doe, CEO at XYZ Corp."
    },
    {
      quote: "The team understood my vision and executed it flawlessly. I couldn’t be happier with the outcome!",
      author: "Jane Smith, Homeowner"
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Any dynamic logic if needed can be handled here
  }
}
