export function Actions() {
  return (
    <div className="actions">
      {/* <!-- El botón de llamar debe tener la clase "activo" cuando -->
        <!-- el número de teléfono tiene 9 cifras --> */}
      <a href="#" className="call">
        Call
      </a>
      {/* <!-- Sólo se tiene que ver un botón u otro --> */}
      <a href="#" className="hang active">
        Hang
      </a>
    </div>
  );
}
