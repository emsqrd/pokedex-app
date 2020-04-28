import { Pipe, PipeTransform } from '@angular/core';
import { FlavorText } from '../interfaces/flavor-text';

@Pipe({
  name: 'flavorTextFilter',
  pure: false
})
export class FlavorTextFilter implements PipeTransform {

    transform(items: FlavorText[], filter: Object): any {
        if (!items || !filter){
            return items;
        } 
        return items.filter((item: FlavorText) => this.applyFilter(item, filter));
    }

    applyFilter(item: FlavorText, filter: Object): boolean {
        
        if (item.language.name === filter['language'] && item.version.name === filter['version']) {
            return true;
        } else {
            return false;
        }

    }
}
