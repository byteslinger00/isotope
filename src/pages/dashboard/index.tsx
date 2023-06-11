import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import useParticipantStore from "@/store/use-participant";

import StatusNum from "@/components/statusNum";
import Summary from "@/components/summary";
import Header from "@/components/header";
import Layout from "@/components/layout";
import { useEffect } from "react";
import getUsers from "@/actions/getUsers";
import getPermiumUsers from "@/actions/getPremiumUsers";
import getOnlineUsers from "@/actions/getOnlineUsers";
import getGenderState from "@/actions/getGenderState";

const Home = () => {
  

  const data1 = [
    { name: "Female", value: 0 },
    { name: "Male", value: 0 },
    { name: "Transgender", value: 0 },
    { name: "Non-binary", value: 0 },
    { name: "Third gender", value: 0 },
    { name: "Gender neutral", value: 0 },
  ];
  const {
    registerd_users,
    active_users,
    premium_users,
    online_users,
    users_state,
    setRegisteredUsers,
    setActiveUsers,
    setOnlineUsers,
    setPremiumUsers,
    setUserState,
  } = useParticipantStore((state) => state);

  const session = useSession();

  useEffect(() => {
    (async () => {
      let data = await getUsers();
      setRegisteredUsers(data.registered);
      setActiveUsers(data.active);
      setPremiumUsers(await getPermiumUsers());
      let genderstate = await getGenderState();
      console.log(genderstate)
      let userdata = await getOnlineUsers();
      if (typeof userdata === 'object' && userdata !== null) 
      {
        setUserState(userdata.address);
        setOnlineUsers(userdata.is_online)
      }
      console.log('getting data..')
      // setRegisteredUsers()
    })();
  }, [setRegisteredUsers, setActiveUsers, session]);

  return (
    <Layout>
      <div className="w-full">
        <Header headers={[{ href: "dashboard", name: "Dashboard" }]} />
        <section className="w-full p-8">
          <div className="grid grid-cols-4 gap-6">
            <StatusNum
              title="Number of registered users"
              value={registerd_users}
            />
            <StatusNum title="Number of active users" value={active_users} />
            <StatusNum title="Number of premium users" value={premium_users} />
            <StatusNum title="Number of users online" value={online_users} />
          </div>
          <div className="grid grid-cols-2 gap-6 mt-6">
            <Summary
              title="Summary of users state"
              data={users_state?.length ? users_state : []}
              color="#3576F4"
            />
            <Summary
              title="Summary of users state"
              data={data1}
              color="#FAC137"
            />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
