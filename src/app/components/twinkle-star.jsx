"use client";
import { useEffect, useState } from "react";

export default function TwinkleStar() {
  const [size, setSize] = useState({
    height: 0,
    width: 0,
  });
  useEffect(() => {
    setSize({ height: window.innerHeight, width: window.innerWidth });
  }, []);
  const list = [];
  const items = [...Array(200)];

  for (const [i, item] of items.entries()) {
    list.push(
      <span
        className="absolute w-0.5 h-0.5 rounded m-0"
        style={{
          top: `${Math.random() * 1500}px`,
          left: `${Math.random() * 1500}px`,
          animation: `twinkle ${Math.random() * 5 + 5}s linear ${
            Math.random() * 1 + 1
          }s infinite`,
        }}
      ></span>
    );
  }

  return <>{list}</>;
}
