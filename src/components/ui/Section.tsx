import React from 'react';


interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export function Section({
  children,
  className = '',
  containerClassName = '',
  ...props
}: SectionProps) {
  return (
    <section
      className={`py-16 md:py-[120px] px-6 md:px-[80px] ${className}`}
      {...props}
    >
      <div
        className={`mx-auto w-full max-w-[1280px] ${containerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
