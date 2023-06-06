"use client";
import { useSession, useSessionContext } from "@supabase/auth-helpers-react";
import Auth from "@/components/Auth";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import Layout from "@/components/layout";
const Home = () => {
  // const { isLoading, session, error } = useSessionContext();

  // useEffect(() => {
  //   if (!isLoading && !session) router.push("/");
  //   if (session) router.push("/dashboard");
  // }, [session, isLoading]);
  const router = useRouter();
  useEffect(() => {
    router.push("/dashboard");
  }, []);
  return '';
};

export default Home;
