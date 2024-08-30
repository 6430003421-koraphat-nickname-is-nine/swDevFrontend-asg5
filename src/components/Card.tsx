import styles from "./card.module.css";
import InteractiveCard from "./InteractiveCard";
import Image from "next/image";

export default function Card({
  hospitalName,
  imgSrc,
}: {
  hospitalName: string;
  imgSrc: string;
}) {
  return (
    <InteractiveCard>
      <div className="w-full h-[70%] relative rounded-lg overflow-hidden block">
        <Image
          src={imgSrc}
          alt={hospitalName}
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="text-2xl font-medium text-center h-[30%] relative block">
        <h1 className="pt-2">{hospitalName}</h1>
      </div>
    </InteractiveCard>
    // <div className="border-2 border-solid border-lime-600 w-1/6 h-[320px] shadow-2xl bg-lime-200 rounded-3xl overflow-hidden ">

    //   </div>
  );
}
