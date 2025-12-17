import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { imageUpload } from "../../../utils";
import useAuth from "../../../hook/useAuth";
import useAxios from "../../../hook/useAxios";

const AddBooks = () => {
  const { user } = useAuth()
  const axios = useAxios()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {

      const imageFile = data.image[0];
      const imageURL = await imageUpload(imageFile);

 
      const bookData = {
        title: data.title,
        author: data.author,
        price: parseFloat(data.price),
        status: data.status, // published | unpublished
        description: data.description,
        image: imageURL,
        createdAt: new Date(),
        librarianEmail: user?.email,
      };

      // console.log(bookData)

      await axios.post(
        `${import.meta.env.VITE_API_URL}/books`,
        bookData
      );

      Swal.fire({
        icon: "success",
        title: "Book Added Successfully",
      });

      reset();
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Failed to Add Book",
        text: err.message,
      });
    }
  };

  return (
    <div className="min-h-screen bg-white  dark:bg-gray-900 p-6">
      <div className="max-w-3xl mx-auto bg-gray-50  dark:bg-gray-800 rounded-2xl shadow-lg p-8">

        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          Add New Book
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          {/* Book Name */}
          <div>
            <label className="label">Book Name</label>
            <input
              {...register("title", { required: "Book name is required" })}
              className="input input-bordered w-full"
              placeholder="Enter book name"
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title.message}</p>
            )}
          </div>

          {/* Author */}
          <div>
            <label className="label">Author Name</label>
            <input
              {...register("author", { required: "Author name is required" })}
              className="input input-bordered w-full"
              placeholder="Author name"
            />
            {errors.author && (
              <p className="text-red-500 text-sm">{errors.author.message}</p>
            )}
          </div>

          {/* Image */}
          <div>
            <label className="label">Book Image</label>
            <input
              type="file"
              accept="image/*"
              {...register("image", { required: "Image is required" })}
               className="block w-full text-sm border border-gray-300 rounded-lg
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:bg-primary file:text-white
              hover:file:bg-primary-dark
              dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
            />
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image.message}</p>
            )}
          </div>

       

          {/* Price */}
          <div>
            <label className="label">Price ($)</label>
            <input
              type="number"
              step="0.01"
              {...register("price", { required: "Price is required" })}
              className="input input-bordered w-full"
              placeholder="Price"
            />
            {errors.price && (
              <p className="text-red-500 text-sm">{errors.price.message}</p>
            )}
          </div>

          {/* Status */}
          <div>
            <label className="label">Status</label>
            <select
              {...register("status", { required: true })}
              className="select select-bordered w-full"
              defaultValue="published"
            >
              <option value="published">Published</option>
              <option value="unpublished">Unpublished</option>
            </select>
          </div>

          {/* Description (Optional Extra Field) */}
          <div>
            <label className="label">Description</label>
            <textarea
              {...register("description")}
              className="textarea textarea-bordered w-full"
              placeholder="Short description (optional)"
            />
          </div>

          {/* Submit */}
          <button type="submit" className="btn btn-primary w-full text-white">
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBooks;
