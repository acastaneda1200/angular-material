import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../services/photos.service';
import { Photos } from '../models/Photos'

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  photos: Photos[] = [];

  constructor(public photosService: PhotosService) { }

  ngOnInit() {
    this.photosService.getPhotos()
    .subscribe(
      photos => {
        console.log(photos);
        this.photos = photos;
      },
      err => console.error(err)
      
      
    )
  }

}
