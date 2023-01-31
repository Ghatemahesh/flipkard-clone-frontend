const ButtonGroup = () => {
  return (
    <div className="btn-group gap-2 p-1 container-fluid d-flex justify-content-center" role="group" aria-label="Basic example">
      <button type="button" className="btn btn-sm bg-light border border-2" style={{ borderRadiusLeft : "30px" }}>
        -
      </button>
      <button type="button" className="btn btn-sm btn-primary  ">
        1
      </button>
      <button type="button" className="btn btn-sm bg-light  border border-2" style={{ borderRadiusRight : "30px" }}>
        +
      </button>
    </div>
  );
};
export default ButtonGroup;
