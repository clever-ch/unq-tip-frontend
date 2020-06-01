import { Injectable } from '@angular/core';
import { PublicationType } from 'src/app/constants/publication-type.enum';

@Injectable({
    providedIn: 'root'
})
export class UrlManagerFirebase {

    getPathToSaveImageByPublicationType(publicationType: PublicationType): string {
        if (publicationType == PublicationType.LOST)
            return "img-publication-lost/";
        else
            return "img-publication-found/";
    }
}