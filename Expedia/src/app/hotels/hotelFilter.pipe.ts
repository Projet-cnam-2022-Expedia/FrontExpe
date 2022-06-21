import {Pipe, PipeTransform} from '@angular/core';
import {HotelsComponent} from "./hotels.component";

@Pipe(
  {name: 'HotelFilter'}
)
export class HotelFilterPipe implements PipeTransform {
  transform(hotel : HotelsComponent[], searchText : string): HotelsComponent[]{
    if (!hotel || !searchText){
      return hotel;
    }
    return hotel.filter(hotel => hotel.data.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
  }
}
