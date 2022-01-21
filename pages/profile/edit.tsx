import { NextPage } from "next";

const ProfileEdit: NextPage = () => {
  return (
    <div className="py-10 px-4 space-y-4">
      <div className="flex space-x-3 items-center">
        <div className="h-14 w-14 rounded-full bg-slate-700" />
        <label>
          <span className="p-2 border border-gray-300 shadow-sm rounded-md bg-white font-medium text-sm text-gray-700">
            Change
          </span>
          <input type="file" className="hidden" />
        </label>
      </div>
      <form className="space-y-4">
        <div className="space-y-1">
          <div className="font-medium text-sm">Email Address</div>
          <input
            className="appearance-none w-full rounded-md border-gray-300 shadow-sm"
            type="text"
            required
          />
        </div>
        <div className="space-y-2">
          <div className="font-medium text-sm">Phone Number</div>
          <div className="flex rounded-md shadow-sm">
            <span className="border-gray-300 bg-gray-100 text-sm flex items-center justify-center text-gray-500 px-3 rounded-l-md border">
              +82
            </span>
            <input
              className="appearance-none w-full border-gray-300 shadow-sm rounded-r-md"
              type="text"
              required
            />
          </div>
        </div>
        <button className="w-full rounded-md font-medium text-sm bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center p-3">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default ProfileEdit;
