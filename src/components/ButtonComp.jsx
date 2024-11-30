let potatoes = 0;

function countPotatoes() {
  console.log("is it working?");
  potatoes += 1;
  document.getElementById("potatoesId").innerHTML = potatoes;
  return potatoes;
}

function ButtonComp() {
  return (
    <div>
      <button type="button" onClick={countPotatoes}>
        "Click Me"
      </button>
      <h1 id="potatoesId">{potatoes}</h1>
    </div>
  );
}

export default ButtonComp;
