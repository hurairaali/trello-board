// components/ui/Button.tsx
import { FC, ReactNode, ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "default" | "ghost";
  className?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  variant = "default",
  className,
  ...props
}) => {
  const variants: Record<typeof variant, string> = {
    default: "w-full text-left cursor-pointer h-8 hover:pointer",
    ghost: `
    flex items-center  text-sm text-gray-400
    hover:bg-[#282f27] hover:text-[#b6c2cf] px-2 py-2 rounded-lg
 transition 
  `,
  };

  return (
    <button className={clsx(variants[variant], className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
