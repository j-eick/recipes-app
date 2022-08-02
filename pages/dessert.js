import Image from "next/image";

export default function Dessert() {
  return (
    <>
      <p>Dessert</p>
      <Image
        src="https://unsplash.com/photos/surQ2mkZNxw/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mzd8fGRlc3NlcnR8ZW58MHwwfHx8MTY1OTMzNzk1NQ&force=true&w=2400"
        alt="futter"
        height="400"
        width="600"
        layout="responsive"
      />
    </>
  );
}
