
function Servicio({ id, title, description, hrefweb, hreftext }) {
  return (
    <div className="col-md-6 fade-up">
      <div
        className="p-4 h-100 position-relative bg-white rounded-3 shadow-sm"
        style={{ overflow: "hidden" }}
      >
        <span
          className="position-absolute"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "5rem",
            lineHeight: 1,
            top: "-10px",
            right: "10px",
            opacity: 0.07,
          }}
        >
          {id}
        </span>
        <h3 className="h4 mb-2">{title}</h3>
        <p className="mb-3 text-muted-soft">{description}</p>
        <a
          href={hrefweb}
          className="small text-decoration-none"
          style={{ color: "var(--color-accent)" }}
        >
          {hreftext}
        </a>
      </div>
    </div>
  );
}
export default Servicio;