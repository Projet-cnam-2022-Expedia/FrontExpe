import {Pipe, PipeTransform} from '@angular/core';

@Pipe(
  {name: 'nameFilter'}
)
export class TestFilterPipe implements PipeTransform {
  transform(names : Array<string>, searchText : string): Array<string>{
    if (!names || !searchText){
      return names;
    }
    return names.filter(names => names.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
  }
}
