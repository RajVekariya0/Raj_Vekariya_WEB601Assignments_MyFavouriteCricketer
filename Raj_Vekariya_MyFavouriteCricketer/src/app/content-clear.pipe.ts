import { Input, Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/ content-interface';


@Pipe({
  name: 'contentClear'
})
export class ContentClearPipe implements PipeTransform  {

  transform(contentItemsArray: Content[], type: string) {
    
    return  contentItemsArray.filter(c => c.type === type ) ;
 
}
  
}

