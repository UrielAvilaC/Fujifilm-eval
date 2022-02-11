import { PersonViewModel } from "../auth/authViewModel";
import { estatus } from "../Common/Estatus";

export interface ProductViewModel {
  id: number;
  code: string;
  name: string;
  price: number;
  registrationDate: string;
  registrationPerson: PersonViewModel;
  estatus: estatus;
  type: string;
}
