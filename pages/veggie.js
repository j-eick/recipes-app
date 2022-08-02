import Image from "next/image";

export default function Veggie() {
  return (
    <>
      <p>Veggie</p>
      <Image
        src="/pizza.jpeg"
        layout="responsive"
        width="500"
        height="400"
        alt="essen"
      />
    </>
  );
}
