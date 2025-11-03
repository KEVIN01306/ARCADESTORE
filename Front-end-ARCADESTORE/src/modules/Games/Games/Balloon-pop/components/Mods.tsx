interface ModsProps{
  modBallon: string;
  changeMod: (newMod: string) => void;
}

const Mods = ({modBallon,changeMod}: ModsProps) => {
return (
    <div className=" h-10 cursor-pointer flex gap-3 items-center justify-center flex-row">
      <button className={`btn ${ modBallon != "RAIN" ? "btn-dash" : ""} btn-accent`} onClick={() => changeMod("RAIN")}>RAIN</button>
      <button className={`btn ${ modBallon != "STATIC" ? "btn-dash" : ""} btn-info`} onClick={() => changeMod("STATIC")}>STATIC</button>
    </div>
  );
}

export default Mods;