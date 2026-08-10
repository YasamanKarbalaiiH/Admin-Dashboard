export default function Modal({
  isOpen,
  onClose,
  fields,
  formData,
  handleChange,
  handleSubmit,
  title,
  submitText,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-light-bg dark:bg-dark-surface rounded-xl p-6 w-[90%] max-w-md relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-xl">
          ✕
        </button>

        <h2 className="text-xl font-bold mb-5">{title}</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {fields.map((field) => (
            <div key={field.name}>
              <label>{field.label}</label>

              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 mt-1 outline-none"
              />
            </div>
          ))}

          <button
            type="submit"
            className="bg-light-primary dark:bg-dark-primary rounded-lg p-2 text-black"
          >
            {submitText}
          </button>
        </form>
      </div>
    </div>
  );
}
