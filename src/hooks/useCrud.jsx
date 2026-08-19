import { useState } from "react";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
export function useCrud(initialData, transformItem = (item) => item) {
  const [data, setData] = useState(initialData);

  const addItem = (newItem) => {
    setData((prev) => [
      ...prev,
      {
        id: uuidv4(),
        ...transformItem(newItem),
      },
    ]);
  };

  const updateItem = (updatedItem) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === updatedItem.id ? transformItem(updatedItem) : item,
      ),
    );
  };

  const deleteItem = (id, itemName = "item") => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#7a1cac",
      cancelButtonColor: "#ad49e1",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setData((prev) => prev.filter((item) => item.id !== id));
        Swal.fire({
          title: "Deleted!",
          text: `Your ${itemName} has been deleted.`,
          icon: "success",
          confirmButtonColor: "#ad49e1",
          confirmButtonText: "OK",
        });
      }
    });
  };

  return { data, setData, addItem, updateItem, deleteItem };
}
