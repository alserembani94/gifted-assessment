import Head from "next/head";
import { Bitter, Poppins } from "next/font/google";
import Image from "next/image";
import Input from "@components/Input";
import PasswordStrengthIndicator from "@components/PasswordStrengthIndicator";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "@components/Button";
import { useEffect, useState } from "react";
import { benchmarkPassword } from "@utils/passwordAssessor";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const bitter = Bitter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

type Inputs = {
  fullName: string;
  email: string;
  password: string;
};

const schema = z
  .object({
    fullName: z.string().min(1),
    email: z.string().email().min(1),
    password: z.string().min(1),
  })
  .refine((data) => {
    const { score, totalScore } = benchmarkPassword(data.password);
    return score === totalScore;
  });

export default function Home() {
  const [showBenchmark, setShowBenchmark] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    setFocus,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });
  const { score, totalScore } = benchmarkPassword(watch("password"));

  useEffect(() => {
    setFocus("fullName");
  }, [setFocus]);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  const handleShowBenchmark = (open: boolean) => {
    setShowBenchmark(open);
  };

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
          onFocus={() => handleShowBenchmark(true)}
          onBlur={() => handleShowBenchmark(false)}
          id="password"
          label="Password"
          type="password"
          isStretched
        />
        <PasswordStrengthIndicator
          password={watch("password")}
          isOpen={showBenchmark}
        />
        <Button
          id="submit"
          disabled={!!errors.fullName || !!errors.email || score !== totalScore}
        >
          CONTINUE
        </Button>
      </form>
    </main>
  );
}
