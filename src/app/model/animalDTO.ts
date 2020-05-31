import { AnimalType } from '../constants/animal-type.enum';

export class AnimalDTO {
    id: number;
	Breed: string;
	AnimalSize: string;
	AnimalAge: string;
	AnimalDescription: string;
	AnimalType: AnimalType;
}