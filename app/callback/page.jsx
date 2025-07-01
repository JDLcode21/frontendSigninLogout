"use client"
import { useState, useEffect } from "react"
import { useAuth } from "react-oidc-context";
import { useRouter } from "next/navigation"
import { RotatingLines } from "react-loader-spinner";


export default function AuthCallback(){
    const auth = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!auth.isLoading) {
        if (auth.isAuthenticated) {
            const userData = auth.user;
            const userProfile = auth.user?.profile;
            console.log({ userProfile, userData });

            router.push("/dashboard");
        } else if (auth.error) {
            console.error("Authentication error:", auth.error.message);
        }
        }
    }, [auth, router]);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                backgroundColor: "#f9f9f9",
            }}
        >
        <RotatingLines
            height={"80"}
            width="80" 
            color="#0070f3"
            radius="6"
            strokeWidth="5"      
            animationDuration="0.75" 
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="rotating-lines-loading"
        />

        <p style={{ marginTop: "20px", fontSize: "18px", color: "#333" }}>
            Processing login...
        </p>
        </div>
    )
}