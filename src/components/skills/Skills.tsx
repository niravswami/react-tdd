import React, { useEffect, useState } from "react";
import { SkillsProps } from "./skills.types";

export default function Skills({ skills }: SkillsProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 500);
  }, []);

  return (
    <>
      <ul>
        {skills.length > 0 &&
          skills.map((skill) => {
            return <li key={skill}>{skill}</li>;
          })}
        {isLoggedIn ? (
          <button>Start learing</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        )}
      </ul>
    </>
  );
}
