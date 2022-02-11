import { PersonViewModel } from "../auth/authViewModel";
import { estatus } from "../Common/Estatus";

export interface ProductViewModel {
  Id: number;
  Code: string;
  Name: string;
  Price: number;
  RegistrationDate: string;
  RegistrationPerson: PersonViewModel;
  Estatus: estatus;
  idEstatus :string;
  Type: string;
}
export interface LogProductViewModel {
  Type: string;
  AffectedDate: string;
  AffectedPerson: string;
  OldCode: string;
  OldName: string;
  OldPrice: string;
  OldType: string;
  OldEstatus: estatus;
  NewCode: string;
  NewName: string;
  NewPrice: string;
  NewType: string;
  NewEstatus: estatus;
}
