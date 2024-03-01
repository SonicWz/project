import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';
import startIcon from '@/shared/assets/icons/star.svg';
import { Icon } from '@/shared/ui/Icon/Icon';

interface StarRatingProps {
    className?: string,
    onSelect?: (starsCount: number) => void,
    size?: number,
    selectedStars?: number,
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
    const { t } = useTranslation();
    const {
        className,
        onSelect,
        size = 30,
        selectedStars = 0,
    } = props;
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));
    const [currentStarCount, setCurrentStarCount] = useState(selectedStars || 0);

    const onHover = (starCount: number) => () => {
        if (!isSelected) {
            setCurrentStarCount(starCount);
        }
    };

    const onLeave = () => () => {
        if (!isSelected) {
            setCurrentStarCount(0);
        }
    };

    const onClickHandler = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setCurrentStarCount(starsCount);
            setIsSelected(true);
        }
    };

    const mods = {
        [cls.selected]: isSelected,
    };

    return (
        <div className={classNames(cls.StarRating, {}, [className])}>
            {stars.map((starNumber) => (
                <Icon
                    className={classNames(cls.starIcon, mods, [currentStarCount >= starNumber ? cls.hovered : cls.normal])}
                    width={size}
                    height={size}
                    Svg={startIcon}
                    key={starNumber}
                    onMouseEnter={onHover(starNumber)}
                    onMouseLeave={onLeave}
                    onClick={onClickHandler(starNumber)}
                />
            ))}
        </div>
    );
});
