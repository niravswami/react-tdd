import React from "react";

type GreetProps = {
  name?: string;
};

export default function Greet(props: GreetProps) {
  return <div>hello {props?.name ? props.name : "Guest"}</div>;
}
