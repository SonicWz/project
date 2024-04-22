import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./MainLayout.module.scss";
import { useTranslation } from "react-i18next";
import { ReactElement } from "react";

interface IMainLayout {
  className?: string;
  header: ReactElement;
  content: ReactElement;
  sidebar: ReactElement;
  toolbar?: ReactElement;
}

export function MainLayout(props: IMainLayout) {
  const { t } = useTranslation();
  const { className, header, content, sidebar, toolbar } = props;
  return (
    <div className={classNames(cls.MainLayout, {}, [className])}>
      <div className={cls.sidebar}>{sidebar}</div>
      <div className={cls.content}>{content}</div>
      <div className={cls.rightbar}>
        <div className={cls.header}>{header}</div>
        <div className={cls.toolbar}>{toolbar}</div>
      </div>
      <div></div>
    </div>
  );
}
