import Link from "next/link";
import {useRouter} from "next/router";
import {cloneElement} from "react";
import cn from "classnames";
import s from './customLink.module.scss'
export const CustomLink = ({href, children, className, onClick, ...props}) => {
  const router = useRouter();

  const pathN = router.pathname.match(/^\/\w*/)[0] === href;

  return (
    <Link
      href={href}
      className={cn(className, pathN && s.customLink)}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};