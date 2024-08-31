import IAddress from "./address";
import IPerson from "./person";

export default interface IContact extends IPerson{
  address: Array<IAddress>;
}