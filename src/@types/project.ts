import { Field } from "./common"

export type Project = {
  rowid: number;
  title: string;
  regDate: Date;
};

export type ProjectFormState = {
  title: Field;
  description: Field;
}