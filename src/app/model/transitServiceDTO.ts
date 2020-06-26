import { UserDTO } from './userDTO';
import { ServiceStatus } from '../constants/service-status.enum';
import { UnidOfTime } from '../constants/unid-of-time.enum';
import { TypeService } from '../constants/type-service.enum';

export class TransitServiceDTO {
    
    Id: number;
    UserDTO: UserDTO;
    ServiceStatus: ServiceStatus;
    ServiceDescription: string;
    UnidOfTime: UnidOfTime;
    TypeService: TypeService;
    TransitTime: number;
}