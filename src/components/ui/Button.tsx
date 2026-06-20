import React from "react";
import { Magnetic } from "./Magnetic";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline";
  children: React.ReactNode;
  magnetic?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", children, magnetic = false, className = "", ...props }, ref) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-body font-semibold transition-all duration-300 rounded-full px-8 py-4 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

    const variants = {
      /**
       * Primary — solid fill. On white bg, shadow-accent replaces the
       * dark-mode "glow" trick to give the button lift and premium feel.
       */
      primary:
        "bg-primary text-white hover:bg-primary/90 shadow-accent hover:shadow-[0_10px_40px_rgba(59,95,224,0.35)] active:scale-[0.98]",
      /**
       * Ghost — transparent with border. On white, text must be dark
       * enough for contrast (textPrimary / #0A0A0F).
       */
      ghost:
        "bg-transparent text-textPrimary hover:bg-surface border border-surface-border hover:border-primary/30 hover:shadow-surface active:scale-[0.98]",
      /**
       * Outline — primary-coloured border, no fill.
       */
      outline:
        "bg-transparent text-primary border border-primary hover:bg-primary hover:text-white hover:shadow-accent active:scale-[0.98]",
    };

    const buttonElement = (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </button>
    );

    if (magnetic) {
      return <Magnetic>{buttonElement}</Magnetic>;
    }

    return buttonElement;
  }
);

Button.displayName = "Button";
