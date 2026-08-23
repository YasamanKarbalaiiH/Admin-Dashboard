import { useState, ChangeEvent, FormEvent } from "react";
import { Fields, FormData, createFormData } from "../Types/fields";


export function useModal(
  fields: Fields[],
  addItem: (item: FormData) => void,
  updateItem: (item: FormData & { id: string }) => void,
) {
  const [formData, setFormData] = useState<FormData>(createFormData(fields));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<
    (FormData & { id: string }) | null
  >(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev: FormData) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editingItem) {
      updateItem({ ...formData, id: editingItem.id });
    } else {
      addItem(formData);
    }
    setFormData(createFormData(fields));
    setEditingItem(null);
    setIsModalOpen(false);
  };

  const openModal = (item: any = null) => {
    if (item) {
      setEditingItem(item);
      setFormData(item);
    } else {
      setEditingItem(null);
      setFormData(createFormData(fields));
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingItem(null);
  };

  return {
    formData,
    setFormData,
    isModalOpen,
    editingItem,
    handleChange,
    handleSubmit,
    openModal,
    closeModal,
  };
}
