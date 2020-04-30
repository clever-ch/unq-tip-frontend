import { AnimalType } from '../constants/animal-type.enum';

export class AnimalDTO {
    id: number;
	breed: string;
	animalSize: string;
	animalAge: string;
	animalDescription: string;
	animalType: AnimalType;
}