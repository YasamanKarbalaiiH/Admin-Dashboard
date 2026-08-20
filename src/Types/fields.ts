export type Fields = {
  name: string;
  label: string;
  type: "text" | "number" | "email" | "password" | "date";
};
export type FormData = Record<string, string>;
export const createFormData = (fields: Fields[]): FormData => {
  return fields.reduce<FormData>((obj, field) => {
    obj[field.name] = "";
    return obj;
  }, {});
};
