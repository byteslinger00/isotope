import { LineChart } from "@/components/lineChart";
import Sidebar from "@/components/sidebar";
import TotalNum from "@/components/totalNum";
import useAccess from "@/utils/useAccess";

const Analytics = () => {
  useAccess();
  const totalSession = [
    {
      label: "Dataset 1",
      data: [0.1, 0.3, 0.4, 0.6, 0.9, 1],
      borderColor: "#FBBC05",
      backgroundColor: "#FBBC05",
    },
  ];
  const totalVisitor = [
    {
      label: "Dataset 1",
      data: [0.1, 0.3, 0.4, 0.6, 0.9, 1],
      borderColor: "#FBBC05",
      backgroundColor: "#FBBC05",
    },
    {
      label: "Dataset 2",
      data: [0.15, 0.35, 0.45, 0.62, 0.88, 0.97],
      borderColor: "#7B61FF",
      backgroundColor: "#7B61FF",
    },
  ];
  const timeSpent = [
    {
      label: "Dataset 1",
      data: [0.1, 0.3, 0.4, 0.6, 0.9, 1],
      borderColor: "#FBBC05",
      backgroundColor: "#FBBC05",
    },
  ];
  const boundRate = [
    {
      label: "Dataset 1",
      data: [0.1, 0.3, 0.4, 0.6, 0.9, 1],
      borderColor: "#FBBC05",
      backgroundColor: "#FBBC05",
    },
    {
      label: "Dataset 2",
      data: [0.15, 0.35, 0.45, 0.62, 0.88, 0.97],
      borderColor: "#7B61FF",
      backgroundColor: "#7B61FF",
    },
  ];
  return (
    <div className="w-full h-[100vh] bg-white flex">
      <Sidebar />
      <section className="w-full px-8">
        Analytics
        <div className="grid grid-cols-2 gap-6">
          <div className="w-full grid grid-cols-2 gap-6">
            <TotalNum title="Total Sessions" value={430} data={totalSession} />
            <TotalNum title="Total Visitors" value={430} data={totalVisitor} />
            <TotalNum title="Time Spent" value={430} data={timeSpent} />
            <TotalNum title="Bounce Rate" value={430} data={boundRate} />
          </div>
          <div className="w-full"></div>
        </div>
      </section>
    </div>
  );
};

export default Analytics;
