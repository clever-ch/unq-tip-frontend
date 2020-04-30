import { AnimalDTO } from './animalDTO';
import { UserDTO } from './userDTO';
import { PublicationType } from '../constants/publication-type.enum';
import { PublicationStatus } from '../constants/publication-status.enum';

export class PublicationDTO {
    id: number;
    publicationAddress: string;
    publicationLocation: string;
    publicationType: PublicationType;
    publicationStatus: PublicationStatus;
    publicationDescription: string;
    photos: Array<string>;

    animalDTO: AnimalDTO;
    userDTO: UserDTO;

}
