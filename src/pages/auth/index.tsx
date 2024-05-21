import { useMutation } from "@tanstack/react-query";
import { mutationLogin } from "./mutation";

export const Auth = () => {
  const { isSuccess, isError, data, error, mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: mutationLogin,
  });

  const handleLogin = async () => {
    try {
      await mutate(); // Call mutate directly, no event argument needed
    } catch (err) {
      console.error("Guest login failed:", err);
      // Handle errors, perhaps show an error message to the user
    }
  };

  return (
    <div className="w-full flex  flex-col justify-center items-center  bg-slate-900 h-screen">
      <div className=" h-4/6 w-4/5  bg-white flex justify-center rounded-lg  items-center">
        <div className="w-2/4 h-full bg-pink-700"></div>
        <div className="w-2/4 h-full ">
          <form className="w-3/5 h-full flex flex-col justify-center mx-auto ">
            <div className="mb-5 ">
              <label
                htmlFor="email"
                className="block text-left mb-2 text-sm font-semibold text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block text-left mb-2 text-sm font-semibold text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="flex items-start mb-5">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                htmlFor="remember"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
            <button
              type="submit"
              className="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
            >
              Login
            </button>

            <button
              type="button"
              className="mt-4 text-slate-800 bg-white border border-pink-700 border-solid   font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
              onClick={handleLogin}
            >
              Login as Guest
            </button>

            {isSuccess && <p>Successfully logged in!</p>}
            {isError && <p>Error logging in: {error.message}</p>}
            {data && console.log(data)}
          </form>
        </div>
      </div>
    </div>
  );
};
