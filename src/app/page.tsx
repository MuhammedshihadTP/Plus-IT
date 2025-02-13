  
  
'use client'
  import Cards from "@/components/main/Cards";
  import NavBar from "@/components/navbar/NavBar";
  import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

  export default function Home() {
    const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      
      router.push('/login');
    }
  }, []);
    return (
  <>
  <NavBar/>
  <Cards/>


  </>
    );
  }
