import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  // Méthode pour rediriger vers une URL
  redirectTo(url: string): void {
    window.location.href = url;
  }
  //imageSource: string = 'https://cultea.fr/wp-content/uploads/2023/11/1chapter2-chasing-sasuke-day-of-parting-2-1697754126752-1024x576.png';
  //backgroundUrl: string = '';

  onImageClicked(imageUrl: any) {
    console.log(imageUrl);

    // this.backgroundUrl = imageUrl;
    //console.log("HomePage: ", imageUrl)
  }
}
