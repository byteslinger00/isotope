import { InputText } from "primereact/inputtext";


import Header from "@/components/header";
import Layout from "@/components/layout";

const Home = () => {
  
  return (
    <Layout>
      <div className="w-full">
        <Header headers={[{ href: "", name: "Admin Settings" }]} />
        <section className="w-full p-8">
          <div className="w-[654px] mx-auto text-center">
            <h1 className="font-inter text-[24px] my-10 font-bold">
              Change Admin Password
            </h1>
            <div className="w-full rounded-[10px] border-[1px] border-bordermain p-10">
              <div className="flex flex-row gap-6 text-left mb-6">
                <div className="my-auto text-[16px] font-semibold  min-w-[150px] text-left">
                  Previous Password
                </div>
                <InputText
                  placeholder="Enter password"
                  type="password"
                  // value={password}
                  // onChange={(e) => {
                  //   setPassowrd(e.target.value);
                  // }}
                  className="w-full"
                />
              </div>
              <div className="flex flex-row gap-6 text-left mb-6">
                <div className="my-auto text-[16px] font-semibold  min-w-[150px] text-left">
                  New Password
                </div>
                <InputText
                  placeholder="Enter new password"
                  type="password"
                  // value={password}
                  // onChange={(e) => {
                  //   setPassowrd(e.target.value);
                  // }}
                  className="w-full"
                />
              </div>
              <div className="flex flex-row gap-6 text-left mb-6">
                <div className="my-auto text-[16px] font-semibold  min-w-[150px] text-left">
                  Repeat Password
                </div>
                <InputText
                  placeholder="Confirm password"
                  type="password"
                  // value={password}
                  // onChange={(e) => {
                  //   setPassowrd(e.target.value);
                  // }}
                  className="w-full"
                />
              </div>
              <div className="flex flex-row gap-6 mt-6">
                <div className="text-[16px] font-semibold my-auto min-w-[150px] text-left "></div>
                <button className="w-full text-[14px] px-6 py-3 rounded-lg bg-deepback text-white hover:bg-deepbackhover ">
                  Change password
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
