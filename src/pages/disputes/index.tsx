import Sidebar from "@/components/sidebar";
import useAccess from "@/utils/useAccess";

const Home = () => {

  useAccess();

  return (
    <div className="w-full h-[100vh] bg-white flex" >
      <Sidebar />
      <section className="w-full">
        Disputes
      </section>
    </div>
  );
};

export default Home;