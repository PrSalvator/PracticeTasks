import IVariant from "./variant";

export default interface IAttribute{
    name: string;
    type: string;
    variants?: IVariant[];
}