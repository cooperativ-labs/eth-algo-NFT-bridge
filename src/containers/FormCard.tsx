import React, { FC } from "react";
import cn from "classnames";

type FormCardProps = {
  children: React.ReactNode;
  maxWidth?: boolean;
  center?: boolean;
};

const FormCard: FC<FormCardProps> = ({ children, maxWidth, center }) => {
  return (
    <div
      className={cn(
        center && "mx-auto",
        !maxWidth && "max-w-2xl",
        // small ? "pt-6 md:p-6" : "pt-8 p-4 md:p-8",
        "min-h-max mb-6 md:rounded-3xl  bg-blue-50  dark:bg-opacity-5 p-12 shadow-innerFormCard dark:shadow-innerFormCardDark"
      )}
    >
      {children}
    </div>
  );
};

export default FormCard;
