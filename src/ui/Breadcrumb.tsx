import React from "react";
import Link from "next/link";

type BreadcrumbProps = {
  items: { label: string; href?: string }[];
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex space-x-2 ">
        {items.map((item, index) => (
          <li key={index} className="flex items-center text-[#e4e4e7]-300 ">
            {item.href ? (
              <Link
                href={item.href}
                className="text-white hover:underline hover:text-[#232323]"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-[#e4e4e7]-300 underline p-2">
                {item.label}
              </span>
            )}
            {index < items.length - 1 && (
              <span className="mx-2 text-[#e4e4e7]-300 ">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
