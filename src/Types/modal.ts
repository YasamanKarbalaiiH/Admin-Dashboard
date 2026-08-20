import { Fields, FormData } from "../Types/fields";
export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  fields: Fields[];
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  title: string;
  submitText: string;
};
