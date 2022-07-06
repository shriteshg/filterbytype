import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  cardborder="3px solid black"



  movies=[
    {
      image:"assets/images/bachan pandey.jpg",
      id:1,
      name:"bachan pandey",
      description:"Bachchhan Paandey is a 2022 Indian Hindi-language action comedy film directed by Farhad Samji and produced by Sajid Nadiadwala. It stars Akshay Kumar, Kriti Sanon, Jacqueline Fernandez and Arshad Warsi. It is a remake of the 2014 Tamil film Jigarthanda[7][8] which itself was inspired by the 2006 South Korean film A Dirty Carnival.",
      realesedate:"2022",
      rating:3.5,
      category:"horror"

    },

    {
      image:"assets/images/brahmastra.jpg",
      id:2,
      name:"brahmastra",
      description:"Brahmāstra was announced in July 2014 but was delayed by several years. Principal photography lasted for five years from February 2018 to March 2022 with filming locations including Bulgaria, London, New York, Edinburgh, and Varanasi.[12] Production and release of the film was delayed multiple times due to the COVID-19 pandemic. The film is scheduled for release on 9 September 2022 in standard formats, 3D, and IMAX 3D, by Star Studios, with Walt Disney Studios Motion Pictures serving as its global distributor.[3]",
      realesedate:"2022",
      rating:3.5,
      category:"horror"
    },

    {
      image:"assets/images/brahmastra11.jpg",
      id:3,
      name:"brahmastra11",
      description:"Brahmāstra was announced in July 2014 but was delayed by several years. Principal photography lasted for five years from February 2018 to March 2022 with filming locations including Bulgaria, London, New York, Edinburgh, and Varanasi.[12] Production and release of the film was delayed multiple times due to the COVID-19 pandemic. The film is scheduled for release on 9 September 2022 in standard formats, 3D, and IMAX 3D, by Star Studios, with Walt Disney Studios Motion Pictures serving as its global distributor.[3]",
      realesedate:"2022",
      rating:3.5,
      category:"comedy"
    },

    {
      image:"assets/images/breathe into shadow.jpg",
      id:4,
      name:"breathe into shadow",
      description:"lorem",
      realesedate:"2022",
      rating:3.5,
      category:"comedy"
    },

    {
      image:"assets/images/kabir s.jpg",
      id:5,
      name:"kabir singh",
      description:"lorem",
      realesedate:"2022",
      rating:3.5,
      category:"action"
    },

    {
      image:"assets/images/mirzanew.webp",
      id:6,
      name:"mirzanew",
      description:"lorem",
      realesedate:"2022",
      rating:3.5,
      category:"action"
    }
  ]

    moviesArrayForFilter=this.movies
  movie_name=""
  filtermovies(event:any)

    {
      // console.log(event);
     this.movie_name = event.target.value
     this.moviesArrayForFilter=this.movies.filter(movie=> movie.name.toLowerCase().includes(this.movie_name.toLowerCase()))

    }




}
