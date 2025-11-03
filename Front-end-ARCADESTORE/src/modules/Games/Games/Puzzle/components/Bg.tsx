
const Bg = () => {
  return (
    <div
      className="absolute inset-0 w-full h-full overflow-hidden [perspective:1000px] [transform-style:preserve-3d] shadow-[inset_0_0_500px_rgb(15,15,15)] bg-white"
      style={{
        backgroundImage: `
          linear-gradient(
            45deg,
            rgb(0, 0, 0) 25%,
            transparent 25%,
            transparent 75%,
            rgb(0, 0, 0) 75%,
            rgb(0, 0, 0)
          ),
          linear-gradient(
            45deg,
            rgb(0, 0, 0) 25%,
            white 25%,
            white 75%,
            rgb(0, 0, 0) 75%,
            rgb(0, 0, 0)
          )
        `,
        backgroundSize: "60px 60px",
        backgroundPosition: "0 0, 30px 30px",
      }}
    >
      <div
        className="absolute top-[55%] w-full h-[150%]"
        style={{
          boxShadow:
            "0px -100px 500px black, inset 0px 100px 500px rgb(15,15,15)",
          backgroundImage: `
            linear-gradient(
              45deg,
              rgb(0, 0, 0) 25%,
              transparent 25%,
              transparent 75%,
              rgb(0, 0, 0) 75%,
              rgb(0, 0, 0)
            ),
            linear-gradient(
              45deg,
              rgb(0, 0, 0) 25%,
              white 25%,
              white 75%,
              rgb(0, 0, 0) 75%,
              rgb(0, 0, 0)
            )
          `,
          backgroundSize: "60px 60px",
          backgroundPosition: "0 0, 30px 30px",
          transformOrigin: "top",
          transform: "rotateX(80deg)",
        }}
      ></div>
    </div>
  );
};

export default Bg;
