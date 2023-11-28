import React from "react";
import { Link } from "react-router-dom";

interface IDashboardLinkProps {
  alt: string;
  src: string;
  to: string;
  children: React.ReactNode;
}

const DashLink: React.FC<IDashboardLinkProps> = ({alt, src, to, children }) => {
  return (
    <>
      <li>
        <Link to={to} className='flex gap-2'>
          <img alt={alt} src={src} className=''/>
          {children}
        </Link>
      </li>
    </>
  );
};

export default DashLink;