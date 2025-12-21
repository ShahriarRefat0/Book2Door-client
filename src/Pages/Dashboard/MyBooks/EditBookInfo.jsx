import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { imageUpload } from "../../../utils";
import Swal from "sweetalert2";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";
import ErrorPage from "../../Error/ErrorPage";
import useAxiosSecure from "../../../hook/useAxiosSecure";
// import Swal from "sweetalert2";

const EditBookInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();


  const { data: book, isLoading, isError } = useQuery({
    queryKey: ["book", id],
    enabled: !!id,
    queryFn: async () => {
      const res = await axiosSecure.get(`/my-inventory/book/${id}`);
      return res.data;
    },
  });


  const {
    register,
    handleSubmit,
    reset,
  } = useForm();


  useEffect(() => {
    if (book) {
      reset({
        title: book.title,
        author: book.author,
        price: book.price,
        quantity: book.quantity,
        category: book.category,
        status: book.status,
        description: book.description,
        tags: book.tags,
      });
    }
  }, [book, reset]);

  // console.log("befor Updated Book:", book);

  const handleUpdate = async (data) => {
    try {
      let imageURL = book.image;


      if (data.image && data.image.length > 0) {
        const imageFile = data.image[0];
        imageURL = await imageUpload(imageFile);
      }

      const updateBookData = {
        title: data.title,
        author: data.author,
        price: parseFloat(data.price),
        quantity: parseFloat(data.quantity),
        category: data.category,
        status: data.status,
        description: data.description,
        tags: data.tags,
        image: imageURL,
        updatedAt: new Date(),
      };

      console.log("Updated Book:", updateBookData);

      await axiosSecure.patch(`/my-inventory/book/${id}`, updateBookData);

      Swal.fire({
        icon: "success",
        title: "Book Updated Successfully",
      });

      navigate("/dashboard/my-books");
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Failed to update book",
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
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-base-100 shadow-xl rounded-xl p-6">
        <h2 className="text-3xl font-bold mb-6">Edit Book</h2>

        <form
          onSubmit={handleSubmit(handleUpdate)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Title */}
          <div>
            <label className="label">Title</label>
            <input
              {...register("title", { required: "Title is required" })}
              className="input input-bordered w-full"
            />
          </div>

          {/* Author */}
          <div>
            <label className="label">Author</label>
            <input
              {...register("author", { required: "Author is required" })}
              className="input input-bordered w-full"
            />
          </div>

          {/* Price */}
          <div>
            <label className="label">Price</label>
            <input
              type="number"
              {...register("price", { required: "Price is required" })}
              className="input input-bordered w-full"
            />
          </div>

          {/* Quantity */}
          <div>
            <label className="label">Quantity</label>
            <input
              type="number"
              {...register("quantity", { required: "Quantity is required" })}
              className="input input-bordered w-full"
            />
          </div>

          {/* Category */}
          <div>
            <label className="label">Category</label>
            <input
              {...register("category", { required: "Category is required" })}
              className="input input-bordered w-full"
            />
          </div>

          {/* Status */}
          <div>
            <label className="label">Status</label>
            <select
              {...register("status", { required: true })}
              className="select select-bordered w-full"
            >
              <option value="Published">Published</option>
              <option value="Unpublished">Unpublished</option>
            </select>
          </div>

          {/* Image */}
          <div className="md:col-span-2">
            <label className="label">Book Image</label>
            <input
              type="file"
              accept="image/*"
              {...register("image")}
              className="block w-full text-sm border border-gray-300 rounded-lg
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:bg-primary file:text-white
              hover:file:bg-primary-dark"
            />
            <p className="text-sm mt-1 text-gray-500">
              Leave empty to keep existing image
            </p>
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="label">Description</label>
            <textarea
              rows={4}
              {...register("description", { required: true })}
              className="textarea textarea-bordered w-full"
            />
          </div>

          {/* Tags */}
          <div className="md:col-span-2">
            <label className="label">Tags</label>
            <input
              {...register("tags", { required: true })}
              className="input input-bordered w-full"
            />
          </div>

          {/* Librarian Info */}
          <div className="md:col-span-2 border rounded-lg p-4 bg-base-200">
            <h3 className="font-semibold mb-2">Librarian Information</h3>
            <div className="flex items-center gap-4">
              <img
                src={book?.librarian?.image}
                alt="Librarian"
                className="w-14 h-14 rounded-full"
              />
              <div>
                <p className="font-medium">{book?.librarian?.name}</p>
                <p className="text-sm text-gray-500">
                  {book?.librarian?.email}
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="md:col-span-2 flex justify-end gap-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="btn btn-outline"
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Update Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBookInfo;
