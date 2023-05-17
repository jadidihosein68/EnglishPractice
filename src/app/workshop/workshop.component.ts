import { Component } from '@angular/core';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.scss']
})
export class WorkshopComponent {


  cardinfo = [
    { 
      name: 'John Doe', 
      bio: 'Lorem ipsum dolor sit amet.',
      imageUrl: 'https://via.placeholder.com/150',
      caption: 'Caption for image 1',
      progress: 70,
      rating: 4
    },
    { 
      name: 'Jane Doe', 
      bio: 'Consectetur adipiscing elit.',
      imageUrl: 'https://via.placeholder.com/150',
      caption: 'Caption for image 2',
      progress: 40,      
      rating: 2
    },
    { 
      name: 'Jane Doe', 
      bio: 'Consectetur adipiscing elit.',
      imageUrl: 'https://via.placeholder.com/150',
      caption: 'Caption for image 2',
      progress: 40,      
      rating: 2
    },
    { 
      name: 'Jane Doe', 
      bio: 'Consectetur adipiscing elit.',
      imageUrl: 'https://via.placeholder.com/150',
      caption: 'Caption for image 2',
      progress: 40,      
      rating: 2
    },{ 
      name: 'Jane Doe', 
      bio: 'Consectetur adipiscing elit.',
      imageUrl: 'https://via.placeholder.com/150',
      caption: 'Caption for image 2',
      progress: 40,      
      rating: 2
    }
    // add more people here
  ];
  
}
