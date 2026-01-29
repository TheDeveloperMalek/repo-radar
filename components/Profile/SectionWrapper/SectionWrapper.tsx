import { ReactNode } from "react";

function SectionWrapper({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="mt-6 border rounded-xl px-8 py-6">
      <h1 className="capitalize mb-4">{title}</h1>
      {children}
    </div>
  );
}

export default SectionWrapper;
