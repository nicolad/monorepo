import React from "react";

export interface MyNewComponentProps {
  text: string;
}

export const MyNewComponent = (props: MyNewComponentProps) => {
  console.log("bla");
  return <span>{props.text}</span>;
};

export default MyNewComponent;
