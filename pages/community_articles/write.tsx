import { NextPage } from "next";

const Write: NextPage = () => {
  return (
    <form className="px-4 py-10">
      <textarea
        className="mt-1 shadow-sm w-full focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500"
        rows={4}
        placeholder="Ask a Question"
      />
      <button className="mt-2 w-full bg-orange-500 text-white rounded-md shadow-sm py-2 px-4 text-sm font-medium hover:bg-orange-600 focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
        Submit
      </button>
    </form>
  );
};

export default Write;
