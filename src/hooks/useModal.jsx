import { useState } from "react";

export function useModal(fields, createFormData, addItem, updateItem) {
  const [formData, setFormData] = useState(createFormData(fields));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
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

  const openModal = (item = null) => {
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
