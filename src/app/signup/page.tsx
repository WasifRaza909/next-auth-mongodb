/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState } from "react";

import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const SignupPage = () => {
  const router = useRouter()
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);

      console.log("Signup success", response.data);
      router.push('/login')
    } catch (error: any) {
      console.log("Signup failed");
      toast.error(error.message)
    }
  };

  return <div>Signup page</div>;
};

export default SignupPage;
