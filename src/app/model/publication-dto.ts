export class PublicationDTO {
    id: number;
    breed: string;
    size: string;
    age: string;
    description: string;
    animalType: number;

    userName: string;
    email: string;

    location: string;
    publicationType: number;
    publicationStatus: number;
    adrees: string;
    specification: string;
    photos: Array<string>;
}
