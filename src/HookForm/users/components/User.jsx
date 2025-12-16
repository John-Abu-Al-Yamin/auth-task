import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "../validations/validations";

const User = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
 <div className="min-h-screen flex items-center justify-center bg-gray-100">
  <form
    onSubmit={handleSubmit(onSubmit)}
    className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg space-y-4"
  >
    <h2 className="text-2xl font-semibold text-gray-800 text-center">
      User Form
    </h2>

    <div className="space-y-3">
      <input
        type="text"
        placeholder="Name"
        {...register("name")}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <p className="text-red-500">{errors.name?.message}</p>

      <input
        type="text"
        placeholder="Email"
        {...register("email")}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
        <p className="text-red-500">{errors.email?.message}</p>
    </div>

    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
    >
      Submit
    </button>
  </form>
</div>

  );
};

export default User;
