import UserTable from "@/components/userTable";
import Sidebar from "@/components/sidebar";
import {
  useSessionContext,
  useUser,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
// import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Database } from "@/utils/database.types";
import { Type } from "@/types";
import Header from "@/components/header";
import Layout from "@/components/layout";

type Profiles = Database["public"]["Tables"]["users"]["Row"];

const Dashboard = () => {
  const { isLoading, session, error } = useSessionContext();
  const supabase = useSupabaseClient<Database>();
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<Array<Type>>();

  useEffect(() => {
    if (session) getData();
  }, [session]);

  async function getData() {
    try {
      setLoading(true);
      let { data, error, status } = await supabase
        .from("users")
        .select(`uid, created_at, phone_number, email, provider, is_disabled`);

      if (error && status !== 406) {
        throw error;
      }
      if (data) {
        setUsers(data);
      }
    } catch (error) {
      alert("Error loading user data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Layout>
      <div className="w-full">
        <Header headers={[{ href: "disputes", name: "Disputes" }]} />
        <section className="w-full p-8">
          {loading ? "Loading..." : <UserTable users={users} />}
        </section>
      </div>
    </Layout>
  );
};

export default Dashboard;
