import { NextPage } from "next";

const Chat: NextPage = () => {
  return (
    <div className="py-10 pb-16 px-4 space-y-4">
      <div className="flex items-start space-x-2">
        <div className="w-8 h-8 rounded-full bg-slate-400" />
        <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
          <p>
            初めまして。こちらの商品を買いたいです。おいくら万円で売りますか？
          </p>
        </div>
      </div>
      <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
        <div className="w-8 h-8 rounded-full bg-slate-400" />
        <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
          <p>5000兆円でお願いします。</p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <div className="w-8 h-8 rounded-full bg-slate-400" />
        <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
          <p>頭、大丈夫ですか？</p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <div className="w-8 h-8 rounded-full bg-slate-400" />
        <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
          <p>
            初めまして。こちらの商品を買いたいです。おいくら万円で売りますか？
          </p>
        </div>
      </div>
      <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
        <div className="w-8 h-8 rounded-full bg-slate-400" />
        <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
          <p>5000兆円でお願いします。</p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <div className="w-8 h-8 rounded-full bg-slate-400" />
        <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
          <p>頭、大丈夫ですか？</p>
        </div>
      </div>
      <div className="fixed py-2 bg-white bottom-0 inset-x-0">
        <div className="flex relative max-w-md items-center w-full mx-auto">
          <input
            type="text"
            className="shadow-sm rounded-full w-full border-gray-300 pr-12 focus:ring-orange-500 focus:outline-none focus:border-orange-500"
          />
          <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
            <button className="flex items-center bg-orange-500 rounded-full px-3 text-sm text-white focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none hover:bg-orange-600">
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
