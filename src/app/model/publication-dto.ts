import { AnimalDTO } from './animalDTO';
import { UserDTO } from './userDTO';
import { PublicationType } from '../constants/publication-type.enum';
import { PublicationStatus } from '../constants/publication-status.enum';

export class PublicationDTO {
    id: number;
    PublicationAddress: string;
    PublicationLocation: string;
    PublicationType: PublicationType;
    PublicationStatus: PublicationStatus;
    PublicationDescription: string;
    Photos: Array<string>;

    AnimalDTO: AnimalDTO;
    UserDTO: UserDTO;

}
