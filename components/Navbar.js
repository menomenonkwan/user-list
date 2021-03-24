import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return ( 
    <nav>
      <div className="logo">
        <Image src="/logo.png" width={100} height={77} />
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/peoples"><a>Peoples</a></Link>
    </nav> 
  );
}
 
export default Navbar;