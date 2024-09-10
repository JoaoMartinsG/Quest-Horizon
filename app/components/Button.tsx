import { ChevronRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";

interface ButtonProps {
  title: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const encodedURL = props.title.toLowerCase().replace(" ", "-");

  return (
    <h2 className="w-fit ">
      <Link href={`/${encodedURL}`} className="flex">
        {props.title}
        <span>
          <ChevronRightIcon className="h-10" />
        </span>
      </Link>
    </h2>
  );
};

export default Button;
