import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { avatarImages } from "@/constants";

interface MeetingCardProps {
  title: string;
  date: string;
  icon: string;
  isPreviousMeeting?: boolean;
  buttonText?: string;
  buttonIcon?: string;
  link: string;
  handleClick: () => void;
}

const MeetingCard = ({
  title,
  date,
  icon,
  isPreviousMeeting,
  buttonText,
  buttonIcon,
  link,
  handleClick,
}: MeetingCardProps) => {
  return (
    <section className="flex flex-col min-h-64 w-full justify-between rounded-2xl bg-dark-1 px-5 py-8 xl:max-w-142">
      <article className="flex flex-col gap-5">
        <Image src={icon} alt="upcoming" width={28} height={28} />
        <div className="flex justify-between">
          <div className="flex flex-col gap-2 w-full">
            <h1 className="text-2xl font-bold truncate">{title}</h1>
            <p className="text-base font-normal">{date}</p>
          </div>
        </div>
      </article>
      <article className={cn("flex justify-center relative", {})}>
        <div className="relative flex w-full max-sm:hidden">
          {avatarImages.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt="attendees"
              width={40}
              height={40}
              className={cn("rounded-full", { absolute: index > 0 })}
              style={{ top: 0, left: index * 28 }}
            />
          ))}
        </div>
        {!isPreviousMeeting && (
          <div className="flex gap-2 mr-6">
            <Button
              onClick={handleClick}
              className="rounded bg-blue-1 cursor-pointer"
            >
              {buttonIcon && (
                <Image src={buttonIcon} alt="feature" width={20} height={20} />
              )}
              &nbsp; {buttonText}
            </Button>
            <Button
              onClick={() => {
                navigator.clipboard.writeText(link);
                toast.success("Link copied");
              }}
              className="bg-dark-4 px-6 cursor-pointer"
            >
              <Image src="/icons/copy.svg" alt="copy" width={20} height={20} />
              &nbsp; Copy Link
            </Button>
          </div>
        )}
      </article>
    </section>
  );
};

export default MeetingCard;
