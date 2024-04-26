import { memo, useCallback } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import ThemeIcon from "@/shared/assets/icons/theme-light.svg";
// import LightIcon from '@/shared/assets/icons/theme-light.svg';
// import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import { Button, ButtonTheme } from "@/shared/ui/deprecated/Button/Button";
import { Theme } from "@/shared/const/Theme";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { saveJsonSettings } from "@/entities/User";
import { Icon } from "@/shared/ui/deprecated/Icon/Icon";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  const dispatch = useAppDispatch();

  const onToggleHandler = useCallback(() => {
    toggleTheme((newTheme) => {
      console.log("тема сменилась на " + newTheme);
      dispatch(
        saveJsonSettings({
          theme: newTheme,
        })
      );
    });
  }, [dispatch, toggleTheme]);

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames("", {}, [className])}
      onClick={onToggleHandler}
    >
      {/* {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />} */}
      <Icon Svg={ThemeIcon} width={40} height={40} inverted />
    </Button>
  );
});
