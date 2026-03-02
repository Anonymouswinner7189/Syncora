import Image from "next/image";
import React from "react";

interface HomeCardProps {
  img: string;
  title: string;
  description: string;
  className: string;
  handleClick: () => void;
}

const HomeCard = ({
  img,
  title,
  description,
  className,
  handleClick,
}: HomeCardProps) => {
  return (
    <div
      className={`${className} px-4 py-6 flex flex-col justify-between w-full xl:max-w-62.5 min-h-65 rounded-xl cursor-pointer`}
      onClick={handleClick}
    >
      <div className="flex-center glassmorphism size-12 rounded-lg">
        <Image src={img} alt={title} width={27} height={27} />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
