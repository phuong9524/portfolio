export default function TwinkleStar() {
  return (
    <>
      <span
        className=" absolute w-0.5 h-0.5 rounded m-0 animate-twinkle ease-linear"
        style={{
          top: `${Math.random() * 1500}px`,
          left: `${Math.random() * 1500}px`,
        }}
      ></span>
    </>
  );
}
