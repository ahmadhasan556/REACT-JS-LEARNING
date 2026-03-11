function Navbar1() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 16,
          padding: "10px 0",
          background: "#222",
        }}
      >
        <a
          href="/"
          style={{
            color: "#fff",
            textDecoration: "none",
            padding: "6px 12px",
            borderRadius: 4,
          }}
        >
          Home
        </a>
        <a
          href="/services"
          style={{
            color: "#fff",
            textDecoration: "none",
            padding: "6px 12px",
            borderRadius: 4,
          }}
        >
          Services
        </a>
        <a
          href="/blogs"
          style={{
            color: "#fff",
            textDecoration: "none",
            padding: "6px 12px",
            borderRadius: 4,
          }}
        >
          Blogs
        </a>
        <a
          href="/contact"
          style={{
            color: "#fff",
            textDecoration: "none",
            padding: "6px 12px",
            borderRadius: 4,
          }}
        >
          Contact
        </a>
        <a
          href="/about"
          style={{
            color: "#fff",
            textDecoration: "none",
            padding: "6px 12px",
            borderRadius: 4,
          }}
        >
          About
        </a>
      </div>
    </>
  );
}

export default Navbar1;
