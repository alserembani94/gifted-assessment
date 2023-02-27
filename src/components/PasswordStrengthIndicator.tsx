import { benchmarkPassword } from "@utils/passwordAssessor";
import { useEffect } from "react";

type Props = {
  password: string;
  isOpen?: boolean;
};

const PasswordStrengthIndicator: React.FC<Props> = ({
  password,
  isOpen = true,
}) => {
  const {
    isMinimum,
    isMixOfLowerAndUpper,
    hasNumberOrSymbol,
    score,
    totalScore,
  } = benchmarkPassword(password);

  const progress = (score / totalScore) * 100;

  return (
    <div
      className="flex flex-col w-full gap-2 text-sm h-full max-h-screen data-[open=false]:max-h-0 overflow-hidden transition-all duration-500 ease-in-out"
      data-open={isOpen}
    >
      <p>Password strength:</p>
      <div role="progressbar" className="bg-slate-300 rounded">
        <div
          className={`h-1 w-[${progress.toFixed(
            0
          )}%] bg-blue-400 rounded transition-all duration-300 ease-in-out`}
        />
        {/* To preload width */}
        <div className="hidden w-[0%]" />
        <div className="hidden w-[33%]" />
        <div className="hidden w-[67%]" />
        <div className="hidden w-[100%]" />
      </div>

      <ul className="list-disc list-outside px-4">
        <li
          className="data-[active=true]:list-['✅'] pl-2"
          data-active={isMinimum}
        >
          Minimum 8 characters
        </li>
        <li
          className="data-[active=true]:list-['✅'] pl-2"
          data-active={isMixOfLowerAndUpper}
        >
          Include a mix of uppercase and lowercase letter
        </li>
        <li
          className="data-[active=true]:list-['✅'] pl-2"
          data-active={hasNumberOrSymbol}
        >
          Include one or more number or symbol
        </li>
      </ul>
    </div>
  );
};

export default PasswordStrengthIndicator;
