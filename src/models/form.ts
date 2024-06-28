import IField from "./field";

export default interface IForm{
    title: string;
    fields: IField[];
    buttons: string[];
    description: string;
}