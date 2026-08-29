import Link from 'next/link';

export default function BookNavbar() {
  return (
    <nav>
      <div className="container">
        <div className="nav-inner">
          <Link href="/" className="logo">SystemCall <span>AI</span></Link>
        </div>
      </div>
    </nav>
  );
}
