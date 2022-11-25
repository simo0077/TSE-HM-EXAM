import {User} from "./Users";
import {Product} from "./Products";

export interface Order{
  id : number;
  user : User;
  products : Product[];

}
