import Profile from "../assets/images/images.png";
import { useRef, useState, ChangeEvent } from "react";
export default function Settings() {
  const [profileImage, setProfileImage] = useState(() => {
    return localStorage.getItem("profileImage") || null;
  });
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  function changeProfile() {
    fileInputRef.current?.click();
  }

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const imageData = e.target?.result as string;
        setProfileImage(imageData);
        localStorage.setItem("profileImage", imageData);
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className="lg:p-6 lg:w-[60%] w-full mx-auto pt-6 pr-3 pl-4 text-sm lg:text-md  ">
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-sliders2 dark:fill-dark-border fill-light-border mb-6 mr-3 text-3xl font-bold"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M10.5 1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4H1.5a.5.5 0 0 1 0-1H10V1.5a.5.5 0 0 1 .5-.5M12 3.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m-6.5 2A.5.5 0 0 1 6 6v1.5h8.5a.5.5 0 0 1 0 1H6V10a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5M1 8a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 1 8m9.5 2a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V13H1.5a.5.5 0 0 1 0-1H10v-1.5a.5.5 0 0 1 .5-.5m1.5 2.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"
          />
        </svg>
        <h1 className="text-3xl  font-bold mb-8 text-light-border dark:text-white">
          Settings
        </h1>
      </div>

      <div className="bg-light-surface dark:bg-dark-surface p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-6 text-light-border dark:text-white">
          Profile Settings
        </h2>

        <div className="space-y-4">
          <div>
            <div className="mb-4 flex ">
              <img
                width={100}
                height={100}
                src={profileImage ? profileImage : Profile}
                alt="Profile photo"
                className="rounded-[50%] bg-white"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-pencil-square ml-3 dark:fill-dark-border fill-light-border dark:fill-white"
                viewBox="0 0 16 16"
                onClick={() => changeProfile()}
              >
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path
                  fillRule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                />
              </svg>
            </div>
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />

            <label className="block text-sm font-medium mb-1 text-light-accent dark:text-white">
              Full Name
            </label>
            <input
              type="text"
              defaultValue="Ali Mohammadi"
              className="w-full p-2 border border-light-accent dark:border-dark-border rounded-lg bg-white dark:bg-dark-bg text-dark-bg dark:text-white focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-border"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-light-accent dark:text-white">
              Email
            </label>
            <input
              type="email"
              defaultValue="ali@example.com"
              className="w-full p-2 border border-light-accent dark:border-dark-border rounded-lg bg-white dark:bg-dark-bg text-dark-bg dark:text-white focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-border"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-light-accent dark:text-white">
              Phone
            </label>
            <input
              type="tel"
              defaultValue="+98 912 123 4567"
              className="w-full p-2 border border-light-accent dark:border-dark-border rounded-lg bg-white dark:bg-dark-bg text-dark-bg dark:text-white focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-border"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-light-accent dark:text-white">
              Address
            </label>
            <textarea
              rows={3}
              defaultValue="Tehran, Iran"
              className="w-full p-2 border border-light-accent dark:border-dark-border rounded-lg bg-white dark:bg-dark-bg text-dark-bg dark:text-white focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-border"
            />
          </div>

          <button className="bg-light-accent dark:bg-dark-border text-white px-6 py-2 rounded-lg hover:opacity-80 transition">
            Save Changes
          </button>
        </div>
      </div>

      <div className="bg-light-surface dark:bg-dark-surface p-6 rounded-lg shadow-md mt-6">
        <h2 className="text-xl font-bold mb-6 text-light-accent dark:text-white">
          Notifications
        </h2>

        <div className="space-y-3">
          <div className="flex items-center justify-between text-light-border dark:text-white">
            <span>Email Notifications</span>
            <input
              type="checkbox"
              defaultChecked
              className="w-5 h-5 accent-light-accent dark:accent-dark-border"
            />
          </div>
          <div className="flex items-center justify-between text-light-border dark:text-white">
            <span>SMS Notifications</span>
            <input
              type="checkbox"
              className="w-5 h-5 accent-light-accent dark:accent-dark-border"
            />
          </div>
          <div className="flex items-center justify-between text-light-border dark:text-white">
            <span>Push Notifications</span>
            <input
              type="checkbox"
              defaultChecked
              className="w-5 h-5 accent-light-accent dark:accent-dark-border"
            />
          </div>
        </div>
      </div>

      <div className="bg-light-surface dark:bg-dark-surface p-6 rounded-lg shadow-md mt-6">
        <h2 className="text-xl font-bold mb-6 text-light-accent dark:text-white">
          Security
        </h2>

        <div className="space-y-3">
          <button className="w-full text-left px-4 py-3 bg-light-bg text-light-border dark:bg-dark-bg dark:text-white rounded-lg hover:bg-light-accent dark:hover:bg-dark-border transition flex items-center gap-3 border border-light-accent dark:border-dark-border">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-key-fill fill-light-border dark:fill-white"
                viewBox="0 0 16 16"
              >
                <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2M2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
              </svg>
            </span>
            Change Password
          </button>
          <button className="w-full text-left px-4 py-3 bg-light-bg text-light-border dark:bg-dark-bg dark:text-white rounded-lg hover:bg-light-accent dark:hover:bg-dark-border transition flex items-center gap-3 border border-light-accent dark:border-dark-border">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-phone fill-light-border dark:fill-white"
                viewBox="0 0 16 16"
              >
                <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
              </svg>
            </span>{" "}
            Two-Factor Authentication
          </button>
        </div>
      </div>
    </div>
  );
}
