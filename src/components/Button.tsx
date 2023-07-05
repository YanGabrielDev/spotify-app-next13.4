import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string | false;
  className?: string;
  icon?: JSX.Element | false;
}

export const Button = ({
  text,
  icon,
  className,
  color,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${className} flex text-black items-center gap-2
             bg-blue-700 py-1 px-6 rounded-xl transform transition-transform hover:scale-110 active:scale-75`}
      {...props}
    >
      {" "}
      {text && (
        <span className={`text-sm uppercase tracking-wider`}>{text}</span>
      )}
      {icon && <span>{icon}</span>}
    </button>
  );
};
