import { useSupabaseClient, useSessionContext } from "@supabase/auth-helpers-react";
import StatusNum from "@/components/statusNum";
import Summary from "@/components/summary";
import { useEffect } from "react";
import router from "next/router";
import useAccess from "@/utils/useAccess";

const Home = () => {
  const supabase = useSupabaseClient();
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) alert(error);
    alert(1);
  };

  useAccess();


  const data = [
    {name:'New York', value: 230},
    {name:'Oregon', value: 80},
    {name:'Texas', value: 50},
    {name:'Ohio', value: 40},
    {name:'Ohio', value: 40},
  ]
  const data1 = [
    {name:'Female', value: 230},
    {name:'Male', value: 80},
    {name:'Non-binary', value: 50},
  ]
  
  return (
    <div className="min-w-full min-h-[100vh] ">
      Dashboard Page
      <button
        onClick={async () => {
          await signOut();
        }}
      >
        Logout
      </button>
      <div className="flex flex-row gap-[24px]">
        <StatusNum title="Number of registered users" value={230} />
        <StatusNum title="Number of active users" value={430} />
        <StatusNum title="Number of premium users" value={120} />
        <StatusNum title="Number of users online" value={300} />
      </div>
      <div className="flex flex-row gap-[24px]">
        <Summary title="Summary of users state" data={data} color="#3576F4"/>
        <Summary title="Summary of users state" data={data1} color="#FAC137"/>
      </div>
    </div>
  );
};

export default Home;
