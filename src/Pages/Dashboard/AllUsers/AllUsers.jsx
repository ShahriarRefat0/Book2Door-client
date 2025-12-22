import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";
import ErrorPage from "../../Error/ErrorPage";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure()

  const { data: users = [], refetch, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure('/users')
      return res.data
    }
  })

  // console.log(users)


  const handleRoleChange = async (email, role) => {
    const result = await Swal.fire({
      title: `Make ${role}?`,
      text: `This user will be promoted to ${role}.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, confirm",
    });

    if (!result.isConfirmed) return;

    try {

    await axiosSecure.patch(`/update-role`, {email, role})
      refetch();
      
      Swal.fire(
        "Success!",
        `User is now a ${role}.`,
        "success"
      );
    } catch (err) {
     // console.log(err.message)
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.message || "Something went wrong!",
      });
    }

  };

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>
  }

  if (isError) {
    return <ErrorPage></ErrorPage>
  }


  return (
    <div className="p-6">
      <div className="bg-base-100 rounded-xl shadow-lg p-6">

        <h2 className="text-2xl font-bold mb-6">
          All Users
        </h2>

        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>User</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>

                  {/* User */}
                  <td className="flex items-center gap-3">
                    <img
                      src={user.photoURL || "/default-avatar.png"}
                      alt="User"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <span className="font-medium">
                      {user.name || "Unnamed"}
                    </span>
                  </td>

                  {/* Email */}
                  <td>{user.email}</td>

                  {/* Role */}
                  <td>
                    <span
                      className={`badge badge-soft ${user.role === "admin"
                        ? "badge-success"
                        : user.role === "librarian"
                          ? "badge-info"
                          : "badge-secondary"
                        }`}
                    >
                      {user.role || "customer"}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="space-x-2">
                    <button
                      disabled={user.role === "librarian"}
                      onClick={() =>
                        handleRoleChange(user?.email, "librarian")
                      }
                      className="btn btn-sm btn-outline btn-info"
                    >
                      Make Librarian
                    </button>

                    <button
                      disabled={user.role === "admin"}
                      onClick={() =>
                        handleRoleChange(user?.email, "admin")
                      }
                      className="btn btn-sm btn-outline btn-success"
                    >
                      Make Admin
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
