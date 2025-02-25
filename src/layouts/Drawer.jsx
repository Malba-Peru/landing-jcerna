import { useVisibleDrawer } from "../hooks/index.js";
import { useEffect, useState } from "react";

const Drawer = ({ children }) => {
  const { visibleDrawer, showDrawer, hiddenDrawer } = useVisibleDrawer();
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    setIsHomePage(window.location.pathname === "/");
  }, []);

  return (
    <>
      <button
        style={{ border: "none", background: "none" }}
        onClick={showDrawer}
      >
        {children}
      </button>

      <section
        style={{
          position: "fixed",
          zIndex: "300",
          width: "100vw",
          height: "100vh",
          top: "0",
          right: "0",
          transition: "all 0.3s ease-in-out",
          transform: visibleDrawer ? "translateX(0%)" : "translateX(100%)",
          display: "grid",
          gridTemplateColumns: "25% 1fr",
        }}
      >
        <div
          onClick={hiddenDrawer}
          style={{
            background: "rgba(1, 116, 183, 0.2)",
          }}
        ></div>
        <article
          style={{
            position: "relative",
            background: "#0174B7",
            padding: "2em 1em",
          }}
        >
          <span
            style={{
              position: "absolute",
              top: "1em",
              right: "2em",
              color: "white",
            }}
            onClick={hiddenDrawer}
          >
            X
          </span>
          <ul style={{ listStyle: "none" }}>
            <ItemLi
              text="Inicio"
              path={isHomePage ? "#" : "/#"}
              onHiddenDrawer={hiddenDrawer}
            />
            <ItemLi
              text="Servicios"
              path={isHomePage ? "#services" : "/#services"}
              onHiddenDrawer={hiddenDrawer}
            />
            <ItemLi
              text="Nosotros"
              path={isHomePage ? "#about-us" : "/#about-us"}
              onHiddenDrawer={hiddenDrawer}
            />
            <ItemLi
              text="Proyectos"
              path="/proyects"
              onHiddenDrawer={hiddenDrawer}
            />

            <ItemLi
              text="Galeria"
              path="/gallery"
              onHiddenDrawer={hiddenDrawer}
            />
            <ItemLi
              text="Contacto"
              path="/contact"
              onHiddenDrawer={hiddenDrawer}
            />
          </ul>
        </article>
      </section>
    </>
  );
};

export default Drawer;

const ItemLi = ({ text, path = "/", onHiddenDrawer }) => (
  <li
    style={{ padding: "0.3em 0", fontSize: "1.5em" }}
    onClick={onHiddenDrawer}
  >
    <a
      href={path}
      style={{
        textDecoration: "none",
        color: "white",
      }}
    >
      {text}
    </a>
  </li>
);
