import { ButtonHTMLAttributes } from "react";
import styles from "@styles/Button.module.css";

type Props = {
  href?: string;
  id?: string;
  children: string | JSX.Element | JSX.Element[];
} & ButtonHTMLAttributes<HTMLButtonElement>;

/**
 *
 * @description Here I intentionally use different approach
 * in styling. Using module CSS, I have to write vanilla CSS.
 * In real use case, these should be standardised for more
 * maintainability and extensive scalability, such as design system.
 *
 * Other thing to note, that I create this component, with in mind
 * that I want to standardised a button that behaves like anchor.
 * So, if user pass `href`, I will render as `<a>` with the same
 * styling with the `<Button>`.
 */

const Button: React.FC<Props> = ({ href, children, id, ...props }) => {
  if (href) {
    return (
      <a href={href} id={id} className={styles.button}>
        {children}
      </a>
    );
  }

  return (
    <button className={styles.button} id={id} {...props}>
      {children}
    </button>
  );
};

export default Button;
