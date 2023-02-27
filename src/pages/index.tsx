import Head from "next/head";
import { Bitter, Poppins } from "next/font/google";
import Image from "next/image";
import Input from "@components/Input";
import PasswordStrengthIndicator from "@components/PasswordStrengthIndicator";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "@components/Button";
import { useEffect } from "react";

const bitter = Bitter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

type Inputs = {
  fullName: string;
  email: string;
  password: string;
};

export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    setFocus,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  useEffect(() => {
    setFocus("fullName");
  }, []);

  return (
    <main
      className={`bg-[url('/images/login-bg.jpg')] bg-cover bg-top min-h-screen flex items-center justify-center ${poppins.className}`}
    >
      {/* Just a basic Head configuration */}
      <Head>
        <title>Register | GIFT.ed</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <form
        className="bg-white px-12 py-8 w-full max-w-md flex flex-col items-center gap-4 m-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Image src="/logo/gift.svg" alt="GIFT.ed" width={60} height={60} />
        <h4 className={`mt-[10px] ${bitter.className}`}>Create your account</h4>
        <Input
          register={register("fullName")}
          id="full_name"
          label="Full Name"
          isStretched
        />
        <Input
          register={register("email")}
          id="email"
          label="Email"
          type="email"
          isStretched
        />
        <Input
          register={register("password")}
          id="password"
          label="Password"
          type="password"
          isStretched
        />
        <PasswordStrengthIndicator password={watch("password")} />
        <Button id="submit">CONTINUE</Button>
      </form>
    </main>
  );
}
