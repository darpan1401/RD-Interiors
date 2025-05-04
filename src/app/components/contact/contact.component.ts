import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactService } from '../../contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  loading = false; // Variable to control the loading overlay

  constructor(private contactService: ContactService) {}

  // Handle form submission
  onSubmit(contactForm: NgForm) {
    if (!this.contact.name || !this.contact.email || !this.contact.phone || !this.contact.message) return;

    this.loading = true; // Show loading overlay while submitting the form

    this.contactService.sendMessage(this.contact).subscribe(
      response => {
        console.log('✅ Response from Sheety:', response);
        alert('Your message has been sent!');
        contactForm.reset();
        this.loading = false;
      },
      error => {
        console.error('❌ Error sending message:', error);
        alert('There was an error sending your message. Please try again.');
        this.loading = false;
      }
    );
  }
}
