"use client";
import React, { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import LoginDialoge from "./LoginDialoge";
import Text from "./Text";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Image from "next/image";

function Main() {
  const [dialogeOpen, setDialogeOpen] = useState(false);

  const tmain = useTranslations("main");
  const t = useTranslations("login");
  const tnav = useTranslations("Navbar");
  const locale = useLocale();
  const isBangla = locale === "bn";

  return (
    <section className="flex flex-col lg:flex-row  bg-white dark:bg-neutral-900 gap-5 md:gap-10 lg:gap-15 px-5 pt-10 md:pt-20 md:px-20 lg:px-30 mt-10">
      <div className="flex flex-col justify-baseline items-baseline md:flex-3 gap-3 md:gap-6 ">
        <Text
          as="h1"
          className="text-xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 text-left w-full"
        >
          {tmain("heading")}
        </Text>
        <Text
          as="p"
          className="text-xs md:text-sm text-gray-500 dark:text-gray-300 text-left"
        >
          {tmain("para")}
        </Text>
        <div className="flex justify-center gap-2 items-center flex-col w-full">
          <div className="relative w-full">
            <Input
              placeholder={t("email")}
              type="email"
              className={`pl-10 ${isBangla ? "bangla" : ""} `}
            />
            <Mail
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              size={20}
            />
          </div>
          <Button
            variant="secondary"
            className="flex justify-center items-center w-full text-md px-5 bg-blue-600 hover:bg-blue-700 text-gray-100 dark:bg-transparent dark:hover:bg-gray-200 dark:hover:text-gray-900 dark:border dark:border-gray-100 dark:text-gray-100 font-semibold cursor-pointer"
            onClick={() => setDialogeOpen(!dialogeOpen)}
          >
            <Text>{tnav("item7")}</Text>
          </Button>
          <LoginDialoge
            dialogeopen={dialogeOpen}
            setdialogeopen={setDialogeOpen}
          />
        </div>
        <Text
          as="span"
          className="text-xs md:text-sm text-gray-400 dark:text-gray-500 text-left w-full"
        >
          {tmain("collaborate")}
        </Text>
        <div className="flex justify-center items-center gap-5 px-8 py-2 md:py-4 bg-gray-100 dark:bg-neutral-800 rounded-xl">
          <div className="flex flex-col justify-center items-center">
            <Stack spacing={1}>
              <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
            </Stack>
            <Text
              as="span"
              className="text-xs md:text-sm text-gray-600 dark:text-gray-100"
            >
              {tmain("reveiw")}
            </Text>
          </div>
          <div className="flex justify-center items-center gap-2">
            <Image
              src="/images/Vector.svg"
              alt="vector"
              width={30}
              height={30}
              className="dark:bg-white rounded-full p-0.5"
            />
            <Text as="span" className="text-sm md:text-lg font-bold">
              Get App{" "}
            </Text>
          </div>
        </div>
      </div>
      <div className="flex md:flex-4 justify-center items-center">
        <Image
          src="/images/main.png"
          width={580}
          height={350}
          alt="Main image"
        
        />
      </div>
    </section>
  );
}

export default Main;
