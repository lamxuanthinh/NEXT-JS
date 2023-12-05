import { useState } from "react";
import { auth } from "../apiClient/index";
import { useAuth } from "../hooks";

export interface LoginPageProps {}

export default function LoginPage(props: LoginPageProps) {
  const { profile, login, logout } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    console.log("login");
    try {
      await login();
      console.log("redirect to dashboard");
    } catch (error) {
      console.log("failed to api login", error);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      console.log("redirect to login");
    } catch (error) {
      console.log("failed to api logout ", error);
    }
  };

  // const handleProfile = async () => {
  //   try {
  //     const data = await auth.profile();
  //     console.log(data);
  //   } catch (error) {
  //     console.log("failed to get profile", error);
  //   }
  // };
  return (
    <div>
      <div>User Name</div>
      <input
        type="text"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <div>Password</div>
      <input
        type="text"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
      {/* <button onClick={handleProfile}>Profile</button> */}
      <button onClick={handleLogout}>Logout</button>
      <div>Profile: {JSON.stringify(profile)}</div>
    </div>
  );
}
