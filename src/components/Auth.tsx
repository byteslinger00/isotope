import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useState } from "react";
import { InputText } from "primereact/inputtext";

const Auth = () => {
  const [err, setErr] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  const supabase = useSupabaseClient();
  async function signInWithEmail() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) return setErr(error.message);
  }
  return (
    <div className="bg-white mx-[auto] w-[654px] h-[300px] font-inter text-center">
      <p className="font-matter font-bold text-[18px] leading-[26px] text-left" >Welcome Back 🎉</p>
      <h1 className="text-[24px] mb-[40px] font-bold">Login</h1>
      <div className="p-[40px] rounded-md border-[1px] border-bordermain">
        <div className="flex flex-row gap-[24px]">
          <div className="text-[16px] font-semibold my-auto min-w-[90px]  text-left">
            Username
          </div>
          <InputText
            placeholder="Eg miaranger@gmail.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="w-full"
          />
        </div>
        <br />
        <div className="flex flex-row gap-[24px]">
          <div className="text-[16px] font-semibold my-auto min-w-[90px] text-left ">
            Password
          </div>
          <InputText
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassowrd(e.target.value);
            }}
            className="w-[100%]"
          />
        </div>
        <div className="flex flex-row gap-[24px] mt-[24px]">
          <div className="text-[16px] font-semibold my-auto min-w-[90px] text-left "></div>
          <button
            onClick={async () => {
              await signInWithEmail();
            }}
            className="w-[100%] text-[14px] px-[24px] py-[14px] rounded-lg bg-deepback text-white hover:bg-deepbackhover "           
          >
            Login
            </button>
        </div>

        <p className="text-[#FF0000] mt-[10px] text-[20px]">{err}</p>
      </div>
    </div>
  );
};

export default Auth;
