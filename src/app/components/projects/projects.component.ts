import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  // An array of project data (you can fetch this from a backend or use static data)
  projects = [
    { title: 'Project 1', image: 'project1.jpg' },
    { title: 'Project 2', image: 'project2.jpg' },
    { title: 'Project 3', image: 'project3.jpg' },
    { title: 'Project 4', image: 'project3.jpg' },
    
  ];

  // Variable to control modal visibility
  isModalOpen: boolean = false;
  selectedImage: string = '';

  // Open the modal and set the selected image
  openModal(project: { title: string, image: string }) {
    this.selectedImage = project.image;
    this.isModalOpen = true;
  }

  // Close the modal
  closeModal() {
    this.isModalOpen = false;
  }
}
