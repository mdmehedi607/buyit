import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Globe } from "lucide-react";
import Image from "next/image";
import Text from "./Text";

const languages = [
  { label: "English", 
     value: "en",
     flag:<Image src='/images/flag/usaflag.png' width={20} height={15} alt="en"/>},
  { label: "বাংলা",
     value: "bn",
      flag:<Image src='/images/flag/bdflag.png' width={20} height={15} alt="bd"/> },
];

export default function Switcher() {
  const pathname = usePathname();
    const currentLocale = pathname.split("/")[1];
  const [selectedLang, setSelectedLang] = useState(currentLocale);

  const getPathWithLocale = (locale) => {
    const segments = pathname.split("/").filter(Boolean);
    segments[0] = locale; // assuming first segment is always locale
    return `/${segments.join("/")}`;
  };

  return (
 <Select
      value={selectedLang}
      onValueChange={(value) => {
        setSelectedLang(value);
        window.location.href = getPathWithLocale(value);
      }}
    >
      <SelectTrigger className="w-[125px]">
        <SelectValue/>
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.value} value={lang.value} className='flex justify-baseline items-center gap-1'>
           {lang.flag}
           <Text> {lang.label}</Text>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
