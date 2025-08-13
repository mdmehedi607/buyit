import Image from "next/image";

import {useTranslations} from 'next-intl';
import Main from "../Componenet/Main";
import Logoslide from "../Componenet/UserLogo";
import Collaborate from "../Componenet/Collaborate";
import FloatingMenu from "../Componenet/FloatingMenu";
import Workway from "../Componenet/Workway";

export default function Home() {
    const t = useTranslations('HomePage');
  return (
   <main className="flex flex-col justify-center items-center">
    
    <Main/>
    <Logoslide/>
    <Collaborate/>
    <FloatingMenu/>
    <Workway/>
   </main>
  );
}
