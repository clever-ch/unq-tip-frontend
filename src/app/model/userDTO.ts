import { PersonDTO } from './PersonDTO';

export class UserDTO {
    id: number;
    userName: string;
    email: string;
    password: string;
    userGuid: string;
    personDTO: PersonDTO;
}