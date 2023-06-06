import Sidebar from "@/components/sidebar";
import { useSession, useSessionContext } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { useEffect } from "react";
interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const { isLoading, session, error } = useSessionContext();

  useEffect(() => {
    if (!isLoading && !session) router.push("/signin");
    if (session && router.pathname === "/signin") router.push("/dashboard");
  }, [session, isLoading]);

  return (
    <div className="w-full h-[100vh] bg-white flex">
      <Sidebar />
      {children}
    </div>
  );
}