import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

// Validation schema
const schema = yup.object({
  name: yup.string().required("Name is required"),
  age: yup.number().required("Age is required").positive().integer(),
  email: yup.string().email("Invalid email").required("Email is required"),
  comments: yup.string().min(10, "Comments must be at least 10 characters"),
});

function FeedbackForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    setSubmitted(true);
    reset();
    // Here you could POST data to your backend/API!
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block mb-1 font-medium">Name</label>
        <input
          {...register("name")}
          className="border rounded w-full p-2"
          placeholder="Enter your name"
        />
        {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
      </div>
      <div>
        <label className="block mb-1 font-medium">Age</label>
        <input
          type="number"
          {...register("age")}
          className="border rounded w-full p-2"
          placeholder="Enter your age"
        />
        {errors.age && <span className="text-red-500 text-sm">{errors.age.message}</span>}
      </div>
      <div>
        <label className="block mb-1 font-medium">Email</label>
        <input
          type="email"
          {...register("email")}
          className="border rounded w-full p-2"
          placeholder="Enter your email"
        />
        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
      </div>
      <div>
        <label className="block mb-1 font-medium">Comments</label>
        <textarea
          {...register("comments")}
          className="border rounded w-full p-2"
          placeholder="Enter your feedback"
        />
        {errors.comments && <span className="text-red-500 text-sm">{errors.comments.message}</span>}
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit Feedback
      </button>
      {submitted && (
        <div className="text-green-600 mt-2">Thank you for your feedback!</div>
      )}
    </form>
  );
}

export default FeedbackForm;
