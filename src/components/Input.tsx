import { HTMLInputTypeAttribute, InputHTMLAttributes, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

type InputProps = {
  id: string;
  label: string;
  className?: string;
  isStretched?: boolean;
  type?: HTMLInputTypeAttribute;
  register?: UseFormRegisterReturn;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({
  className,
  id,
  label,
  isStretched = false,
  type,
  register,
  ...props
}) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [inputType, setInputType] = useState(type);

  const handlePasswordToggle = () => {
    if (inputType === "text") {
      setInputType("password");
      setIsShowPassword(false);
    }
    if (inputType === "password") {
      setInputType("text");
      setIsShowPassword(true);
    }
  };

  return (
    <div
      className="flex flex-col gap-1 data-[stretch=true]:w-full relative items-stretch"
      data-stretch={isStretched}
    >
      <label htmlFor={id}>{label}</label>
      <div className="flex flex-row items-center">
        <input
          id={id}
          className={
            "h-10 border border-slate-400 px-2 w-full transition-all duration-300 ease-in-out " +
            className
          }
          type={inputType}
          {...register}
          {...props}
        />
        {type === "password" && (
          <button
            className="absolute p-3 right-0"
            type="button"
            onClick={handlePasswordToggle}
          >
            {isShowPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
