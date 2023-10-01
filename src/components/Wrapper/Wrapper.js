import s from "./wrapper.module.scss";

export const Wrapper = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};
