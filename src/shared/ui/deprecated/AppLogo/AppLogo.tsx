import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import cls from "./AppLogo.module.scss";
import AppSvg from "@/shared/assets/icons/app-image.svg";
import { HStack } from "../Stack";

interface AppLogoProps {
  className?: string;
}
/**
 * Компонент устарел. Используем новые компоненты из папки redesigned
 * @deprecated
 */
export const AppLogo = memo(({ className }: AppLogoProps) => {
  return (
    <HStack
      max
      justify="center"
      className={classNames(cls.appLogoWrapper, {}, [className])}
    >
      <div className={cls.gradientBig} />
      <div className={cls.gradientSmall} />
      <AppSvg className={cls.appLogo} />
    </HStack>
  );
});
