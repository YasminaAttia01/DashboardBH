import Link from "next/link";
const NavBar = () => {
  return (
    <nav className="navbar">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgEYKE5fKweCUvBtFlzVHgYCo4aEq0E2NA9w&usqp=CAU" />
      <div className="links">
        <Link href="/">Home</Link>
        <Link
          href="/Create"
          style={{
            color: "white",
            backgroundColor: "#09a79d",
            borderRadius: "8px",
          }}
        >
          New product
        </Link>
      </div>
    </nav>
  );
};
export default NavBar;
