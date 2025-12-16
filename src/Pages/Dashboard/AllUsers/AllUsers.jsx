import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/admin/users`)
      .then((res) => setUsers(res.data));
  }, []);

  // 🔁 Update Role
  const handleRoleChange = async (id, role) => {
    const result = await Swal.fire({
      title: `Make ${role}?`,
      text: `This user will be promoted to ${role}.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, confirm",
    });

    if (!result.isConfirmed) return;

    await axios.patch(
      `${import.meta.env.VITE_API_URL}/admin/users/${id}`,
      { role }
    );

    setUsers((prev) =>
      prev.map((user) =>
        user._id === id ? { ...user, role } : user
      )
    );

    Swal.fire(
      "Success!",
      `User is now a ${role}.`,
      "success"
    );
  };

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
                      className={`badge ${user.role === "admin"
                          ? "badge-error"
                          : user.role === "librarian"
                            ? "badge-info"
                            : "badge-ghost"
                        }`}
                    >
                      {user.role || "user"}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="space-x-2">
                    <button
                      disabled={user.role === "librarian"}
                      onClick={() =>
                        handleRoleChange(user._id, "librarian")
                      }
                      className="btn btn-sm btn-outline btn-info"
                    >
                      Make Librarian
                    </button>

                    <button
                      disabled={user.role === "admin"}
                      onClick={() =>
                        handleRoleChange(user._id, "admin")
                      }
                      className="btn btn-sm btn-outline btn-error"
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
