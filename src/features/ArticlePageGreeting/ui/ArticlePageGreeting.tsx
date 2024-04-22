import { saveJsonSettings, useJsonSettings } from "@/entities/User";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Drawer } from "@/shared/ui/Drawer/Drawer";
import { Modal } from "@/shared/ui/Modal/Modal";
import { Text } from "@/shared/ui/Text/Text";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import cls from "./ArticlePageGreeting.module.scss";

interface ArticlePageGreetingProps {
  className?: string;
}

export const ArticlePageGreeting = (props: ArticlePageGreetingProps) => {
  const { t } = useTranslation();
  const { className } = props;
  const [isOpen, setIsOpen] = useState(false);
  const { isArticlePageWasOpened } = useJsonSettings();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isArticlePageWasOpened) {
      setIsOpen(true);
      dispatch(saveJsonSettings({ isArticlePageWasOpened: true }));
    }
  }, [isArticlePageWasOpened, dispatch]);

  const onClose = () => {
    setIsOpen(false);
  };

  const text = (
    <Text title={t("Добро пожаловать")} text={t("Вы можете искать")} />
  );

  if (isMobile) {
    return (
      <Drawer lazy isOpen={isOpen} onClose={onClose}>
        {text}
      </Drawer>
    );
  }

  return (
    <Modal lazy isOpen={isOpen} onClose={onClose}>
      {text}
    </Modal>
  );
};
