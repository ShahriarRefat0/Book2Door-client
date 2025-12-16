import { useState } from "react";
import useAuth from "../../../hook/useAuth";
import UpdateProfileModal from "./UpdateProfileModal";

const MyProfile = () => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">

        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          My Profile
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Avatar */}
          <div className="w-32 h-32 rounded-full border-4 border-primary overflow-hidden">
            <img
              src={user?.photoURL || "/default-avatar.png"}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex-1 space-y-3 text-center md:text-left">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Name</p>
              <p className="text-lg font-semibold text-gray-800 dark:text-white">
                {user?.displayName || "Not set"}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
              <p className="text-lg text-gray-700 dark:text-gray-200">
                {user?.email}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-right">
          <button
            onClick={() => setIsOpen(true)}
            className="btn btn-primary"
          >
            Update Profile
          </button>
        </div>
      </div>

      {/* Modal */}
      {isOpen && <UpdateProfileModal closeModal={() => setIsOpen(false)} />}
    </div>
  );
};

export default MyProfile;
