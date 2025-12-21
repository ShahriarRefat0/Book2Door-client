import { useState } from "react";
import useAuth from "../../../hook/useAuth";
import UpdateProfileModal from "./UpdateProfileModal";
import useRole from "../../../hook/useRole";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";

const MyProfile = () => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [role, isRoleLoading] = useRole()

  if (isRoleLoading) {
    return <LoadingSpinner></LoadingSpinner>
  }

  // console.log("role", role, isRoleLoading)
  return (
    <div className="min-h-screen bg-white  dark:bg-gray-900 p-6">
      <div className="max-w-3xl mx-auto  bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg p-8">

        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          My Profile
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex flex-col  items-center">
          {/* Avatar */}
          <div className="w-32 h-32 rounded-full border-4 border-primary overflow-hidden">
            <img
              src={user?.photoURL || "/default-avatar.png"}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-primary mt-3 rounded-2xl w-25 py-2 ">
            <h3 className="text-center text-white font-bold">{role}</h3>
          </div>
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
            className="btn btn-primary text-white"
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
