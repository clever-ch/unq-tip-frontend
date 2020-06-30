import { UserDTO } from './userDTO';
import { ServiceStatus } from '../constants/service-status.enum';
import { UnidOfTime } from '../constants/unid-of-time.enum';
import { TypeService } from '../constants/type-service.enum';

//Clase "abstracta" creado sólo para crear un Servicio antes de conocer su tipo.
//Nunca se debe pasar al backend ya que sólo existe en el front
export class PrestacionDTO {

    ServiceDescription: string;
    UnidOfTime: UnidOfTime;
    TypeService: TypeService;
    Time: number;
}