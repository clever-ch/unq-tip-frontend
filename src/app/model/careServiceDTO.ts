import { UserDTO } from './userDTO';
import { ServiceStatus } from '../constants/service-status.enum';
import { UnidOfTime } from '../constants/unid-of-time.enum';

export class CareServiceDTO {
    
    Id: number;
    UserDTO: UserDTO;
    ServiceStatus: ServiceStatus;
    ServiceDescription: string;
    UnidOfTime: UnidOfTime;

    CareTime: number;
}