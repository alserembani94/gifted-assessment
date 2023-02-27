import { benchmarkPassword } from "@utils/passwordAssessor";

type Props = {
  password: string;
};

const PasswordStrengthIndicator: React.FC<Props> = ({ password }) => {
  const {
    isMinimum,
    isMixOfLowerAndUpper,
    hasNumberOrSymbol,
    score,
    totalScore,
  } = benchmarkPassword(password);

  return <div className="flex flex-col"></div>;
};

export default PasswordStrengthIndicator;
