import * as React from "react";
import { StudentProfile } from "../components/swr";
import { useState } from "react";

export interface SWRPageProps {}
export default function SWRPage(props: SWRPageProps) {
  const [profileList, setProfileList] = useState([1]);
  const handleAddProfile = () => {
    setProfileList([...profileList, 1]);
  };

  return (
    <div>
      <h1>SWR</h1>
      <button onClick={handleAddProfile}>ADD Profile</button>
      <ul>
        {profileList.map((x, index) => (
          <li key={index}>
            <StudentProfile StudentId="lea2aa9l7x3a5v0" />
          </li>
        ))}
      </ul>
    </div>
  );
}
