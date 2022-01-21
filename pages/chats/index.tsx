import { NextPage } from "next";
import Layout from "../../components/layout";

const Chats: NextPage = () => {
  return (
    <Layout hasTabBar title="チャット">
      <div className="py-10 divide-y-[1px]">
        {[1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <div
            className="flex px-4 cursor-pointer py-3 items-center space-x-3"
            key={i}
          >
            <div className="w-12 h-12 rounded-full bg-slate-300" />
            <div>
              <p className="text-gray-700">Stephen Joves</p>
              <p className="text-sm text-gray-500">
                取引は明日の午後２時でお願いします。
              </p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Chats;
