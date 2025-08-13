
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle,
  Eye,
  EyeOff,
  Loader2,
  Lock,
  Mail,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {useTranslations, useLocale} from 'next-intl';
import Text from './Text';


function LoginDialoge({dialogeopen, setdialogeopen}) {
    const [currentTab, setCurrentTab] = useState(
    "login"
  );
  const [showPassword, setShowPassword] = useState(false);
  const [forgotPasswordSuccess, setForgotPasswordSuccess] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [signupLoading, setSignupLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [forgotPasswordLoading, setForgotPasswordLoading] = useState(false);

   const t = useTranslations('login');

    const locale = useLocale()
  const isBangla = locale === 'bn'
  return (
    <Dialog open={dialogeopen} onOpenChange={setdialogeopen}>
      <DialogContent className="sm:max-w-[425px] p-6">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold mb-4">
           <Text> {t("heading")}</Text>
          </DialogTitle>
          <Tabs
            value={currentTab}
            onValueChange={(value) =>
              setCurrentTab(value)
            }
          >
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="login"><Text>{t("tab1")}</Text></TabsTrigger>
              <TabsTrigger value="signup"><Text>{t("tab2")}</Text></TabsTrigger>
              <TabsTrigger value="forgot"><Text>{t("tab3")}</Text></TabsTrigger>
            </TabsList>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <TabsContent value="login" className="space-y-4">
                  <form className="space-y-4">
                    <div className="relative">
                      <Input
                        placeholder={t("email")}
                        type="email"
                        className={`pl-10 ${isBangla ? 'bangla' : ''}`}
                      />
                      <Mail
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                        size={20}
                      />
                    </div>
                    <div className="relative">
                      <Input
                        placeholder={t("password")}
                        type={showPassword ? "text" : "password"}
                        className={`pl-10 ${isBangla ? 'bangla' : ''}`}
                      />
                      <Lock
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                        size={20}
                      />
                      {showPassword ? (
                        <EyeOff
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                          size={20}
                          onClick={() => setShowPassword(false)}
                        />
                      ) : (
                        <Eye
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                          size={20}
                          onClick={() => setShowPassword(true)}
                        />
                      )}
                    </div>
                  
                    <Button type="submit" className="w-full font-bold">
                      {loginLoading ? (
                        <Loader2 className="animate-spin mr-2" size={20} />
                      ) : (
                       <Text> {t("tab1")}</Text>
                      )}
                    </Button>
                  </form>
                  <div className="flex items-center my-4">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <Text as="p" className="mx-2 text-gray-500 text-sm">{t("or")}</Text>
                    <div className="flex-1 h-px bg-gray-300"></div>
                  </div>
                  <Button className="w-full flex items-center justify-center gap-2 bg-white text-gray-700 border border-gray-300 hover:bg-gray-50">
                    {googleLoading ? (
                      <>
                        <Loader2 className="animate-spin mr-2" size={20} />
                        <Text>{t("googleLogin")}......</Text>
                      </>
                    ) : (
                      <>
                        <Image
                          src="/images/google.svg"
                          alt="google"
                          width={20}
                          height={20}
                        />
                        <Text>{t("googleLogin")}</Text>
                      </>
                    )}
                  </Button>
                </TabsContent>
                <TabsContent value="signup" className="space-y-4">
                  <form  className="space-y-4">
                    <div className="relative">
                      <Input
                        placeholder={t("name")}
                        type="text"
                        className={`pl-10 ${isBangla ? 'bangla' : ''}`}
                      />
                      <User
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                        size={20}
                      />
                    </div>
                    <div className="relative">
                      <Input
                        placeholder={t("email")}
                        type="email"
                        className={`pl-10 ${isBangla ? 'bangla' : ''}`}
                      />
                      <Mail
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                        size={20}
                      />
                    </div>
                    <div className="relative">
                      <Input
                        placeholder={t("password")}
                        type={showPassword ? "text" : "password"}
                        className={`pl-10 ${isBangla ? 'bangla' : ''}`}
                      />
                      <Lock
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                        size={20}
                      />
                      {showPassword ? (
                        <EyeOff
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                          size={20}
                          onClick={() => setShowPassword(false)}
                        />
                      ) : (
                        <Eye
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                          size={20}
                          onClick={() => setShowPassword(true)}
                        />
                      )}
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="mr-2"
                        id="agree"
                      />
                      <label className="text-sm text-gray-700" htmlFor="agree">
                       <Text> {t("agree")}</Text>
                      </label>
                    </div>
                    <Button type="submit" className="w-full font-bold">
                      {signupLoading ? (
                        <Loader2 className="animate-spin mr-2" size={20} />
                      ) : (
                        <Text>{t("tab2")}</Text>
                      )}
                    </Button>
                  </form>
                </TabsContent>
                <TabsContent value="forgot" className="space-y-4">
                  {!forgotPasswordSuccess ? (
                    <form className="space-y-4">
                      <div className="relative">
                        <Input
                          placeholder={t("email")}
                          type="email"
                          className={`pl-10 ${isBangla ? 'bangla' : ''}`}
                        />
                        <Mail
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                          size={20}
                        />
                      </div>

                      <Button type="submit" className="w-full font-bold">
                        {forgotPasswordLoading ? (
                          <Loader2 className="animate-spin mr-2" size={20} />
                        ) : (
                          <Text>{t("sendLink")}</Text>
                        )}
                      </Button>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center space-x-4"
                    >
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
                      <h3 className="text-xl font-semibold text-gray-700">
                       <Text>{t("sendLink")}</Text>
                      </h3>
                      <p className="text-gray-500 mb-2">
                        <Text>{t("resetLinkDetails")}</Text>
                      </p>
                      <Button onClick={()=>setForgotPasswordSuccess(false)} className="w-full">
                        Send Another Link to Email
                      </Button>
                    </motion.div>
                  )}
                </TabsContent>
              </motion.div>
            </AnimatePresence>
          </Tabs>
          <Text as="p" className="text-sm text-center mt-2 text-gray-600">
             {t("agreeterm")} {" "}
          <Text as={Link} href="/terms-of-use" className="text-blue-500 hover:underline">
           {t("terms")}
          </Text>, {" "}
          <Text as={Link} href="/privacy-policy" className="text-blue-500 hover:underline">
           {t("privacy")}
          </Text>
          </Text>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default LoginDialoge;