import * as React from "react";
import useSWR from "swr";

export interface StudentProfileProps {
  StudentId: string;
}

const MS_PER_HOUR = 60 * 60 * 1000;

export function StudentProfile(props: StudentProfileProps) {
  const { data, error, mutate, isValidating } = useSWR(
    `/students/${props.StudentId}`,
    {
      dedupingInterval: MS_PER_HOUR,
    }
  );

  const handelMutate = () => {
    mutate({ name: "Raven Ryan" }, true);
  };

  return (
    <div>
      Name: {data?.name}
      <button onClick={handelMutate}>mutate</button>
    </div>
  );
}
