import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RatingCard.module.scss';
import { Card } from '@/shared/ui/Card/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Input } from '@/shared/ui/Input/Input';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button';
import { Drawer } from '@/shared/ui/Drawer/Drawer';

interface RatingCardProps {
    className?: string,
    title?: string,
    feedbackTitle?: string,
    hasFeedback?: boolean
    onCancel?: (starCount: number) => void,
    onAccept?: (starCount: number, feedback?: string) => void,
    rate?: number,
    isOwn?: boolean,
}

export const RatingCard = memo((props: RatingCardProps) => {
    const { t } = useTranslation();
    const {
        className,
        onAccept,
        onCancel,
        title,
        hasFeedback,
        feedbackTitle,
        rate,
        isOwn,
    } = props;

    const [isOpen, setIsOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate || 0);
    const [feedback, setFeedback] = useState('');

    const onSelectHandler = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);

        console.log(starsCount);
        if (hasFeedback) {
            setIsOpen(true);
        } else {
            onAccept?.(selectedStarsCount);
            console.log(selectedStarsCount);
        }
    }, [hasFeedback, onAccept]);

    const onOk = useCallback(() => {
        setIsOpen(false);
        onAccept?.(starsCount, feedback);
        console.log(starsCount, feedback);
    }, [feedback, starsCount]);

    const onClose = useCallback(() => {
        setFeedback('');
        setIsOpen(false);
        onAccept?.(starsCount);
        console.log(starsCount);
    }, []);

    const onChange = useCallback((feedback: string) => {
        setFeedback(feedback);
    }, [feedback]);

    const modalContent = (
        <>
            <Text title={feedbackTitle} />
            <Input
                placeholder={t('Напишите ваш отзыв')}
                value={feedback}
                onChange={onChange}
            />
        </>
    );

    return (
        <Card max className={classNames(cls.RatingCard, {}, [className])}>
            <VStack align="center" gap="8">
                {
                    isOwn ? <Text title={!rate ? title : t('Оценка профиля')} />
                        : <Text title={!rate ? title : t('Спасибо за оценку')} />
                }

                <StarRating size={40} onSelect={onSelectHandler} selectedStars={starsCount} />
            </VStack>
            <BrowserView>
                <Modal
                    isOpen={isOpen}
                    onClose={onClose}
                    lazy
                >
                    <VStack gap="32" max>
                        {modalContent}
                        <HStack gap="16" max justify="end">
                            <Button onClick={onOk} theme={ButtonTheme.OUTLINE}>{t('ОК')}</Button>
                            <Button onClick={onClose} theme={ButtonTheme.OUTLINE_RED}>{t('Отмена')}</Button>
                        </HStack>
                    </VStack>

                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer
                    isOpen={isOpen}
                    onClose={onClose}
                    lazy
                >
                    <VStack gap="32">
                        {modalContent}
                        <Button fullWidth onClick={onOk} size={ButtonSize.L}>
                            {t('Отправить')}
                        </Button>
                    </VStack>
                </Drawer>
            </MobileView>
        </Card>
    );
});
