import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class LocalStorageService {
    constructor(@Inject(PLATFORM_ID) private platformId: Object) {}   

    setItem(token:any, result:any){
        if (isPlatformBrowser(this.platformId))
            localStorage.setItem(token, result.toString());
    }
   
    removeItem(key:any){
        if (isPlatformBrowser(this.platformId))
            localStorage.removeItem(key);
    }
    getItem(key:any){
        if (isPlatformBrowser(this.platformId))
            return localStorage.getItem(key);
        return null;
    }
}
