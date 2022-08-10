import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav>
        
        <ul className="menu-bar">
          <li>
            <Link href="/bag">
              <a> Bag </a>
            </Link>
          </li>
          <li>
            <Link href="/Travel">
              <a> Travel </a>
            </Link>
          </li>
          <li>
            <Link href="/Accessories">
              <a> Accessories </a>
            </Link>
          </li>
          <li>
            <Link href="/Gifting">
              <a> Gifting </a>
            </Link>
          </li>
          <li>
            <Link href="/Jewelery">
              <a> Jewelery </a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
