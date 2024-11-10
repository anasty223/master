import React from "react";
import Link from "next/link";

type BreadcrumbProps = {
  items: { label: string; href?: string }[];
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.href ? (
              <Link
                href={item.href}
                className="text-white hover:underline hover:text-[#232323]"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-[#232323]">{item.label}</span>
            )}
            {index < items.length - 1 && (
              <span className="mx-2 text-[#232323]">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
