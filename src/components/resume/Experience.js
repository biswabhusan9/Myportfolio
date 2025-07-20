import React from "react";
import ResumeCard from "./ResumeCard";
import {motion} from "framer-motion";

const Experience = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {duration: 0.5}}}
      className="py-12 font-titleFont flex flex-col lg:flex-row lg:gap-20 gap-10" // Adjust for mobile and larger screens
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024 - 2025</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Lorem Ipsum Dolor"
            subTitle="Google Out Tech - (2024 - Present)"
            result="USA"
            des="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer sit amet nunc nec justo interdum dignissim."
          />
          <ResumeCard
            title="Lorem Ipsum Dolor"
            subTitle="Apple Developer Team - (2024 - 2025)"
            result="MALAYSIA"
            des="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer sit amet nunc nec justo interdum dignissim."
          />
          <ResumeCard
            title="Lorem Ipsum Dolor"
            subTitle="Nike - (2024 - 2025)"
            result="Oman"
            des="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer sit amet nunc nec justo interdum dignissim."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024 - 2025</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Lorem Ipsum Dolor"
            subTitle="Rainbow Gym Center (2024 - 2024)"
            result="DHAKA"
            des="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer sit amet nunc nec justo interdum dignissim."
          />
          <ResumeCard
            title="Lorem Ipsum Dolor"
            subTitle="SuperKing College (2024 - 2025)"
            result="CANADA"
            des="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer sit amet nunc nec justo interdum dignissim."
          />
          <ResumeCard
            title="Lorem Ipsum Dolor"
            subTitle="Kingstar Secondary School (2024 - 2025)"
            result="NEVADA"
            des="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer sit amet nunc nec justo interdum dignissim."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
