import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../../hook/useAuth";
import { imageUpload } from "../../../utils";

const UpdateProfileModal = ({ closeModal }) => {
  const { user, updateUserProfile } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: user?.displayName || "",
    },
  });

  const onSubmit = async (data) => {
    try {
      let photoURL = user?.photoURL;

      // If new image selected
      if (data.photo?.length > 0) {
        photoURL = await imageUpload(data.photo[0]);
      }

      await updateUserProfile({
        displayName: data.name,
        photoURL,
      });

      Swal.fire({
        icon: "success",
        title: "Profile Updated",
      });

      closeModal();
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: err.message,
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white dark:bg-gray-800 rounded-xl w-full max-w-md p-6">

        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          Update Profile
        </h3>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            {errors.name && (
              <p className="text-xs text-red-500 mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Photo */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              Profile Photo
            </label>
            <input
              type="file"
              accept="image/*"
              {...register("photo", {required: true})}
              className="block w-full text-sm border border-gray-400 rounded-lg
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:bg-primary file:text-white
              hover:file:bg-primary-dark
              dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={closeModal}
              className="btn btn-ghost"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfileModal;
