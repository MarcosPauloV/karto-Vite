import Image from 'next/image';
import Link from 'next/link';

interface IDashboardLinkProps {
  alt: string;
  src: string;
  href: string;
  children: React.ReactNode;
}

const DashLink = ({alt, src, href, children }: IDashboardLinkProps) => {
  return (
    <>
      <li>
        <Link href={href} className='flex gap-2'>
          <Image alt={alt} src={src} width={20} height={20} className=''/>
          {children}
        </Link>
      </li>
    </>
  );
};

export default DashLink;