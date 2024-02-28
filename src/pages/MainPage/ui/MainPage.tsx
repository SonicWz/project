import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from '@/shared/ui/Input/Input';
import { ListBox } from '@/shared/ui/Popups/ui/ListBox/ListBox';
import { Page } from '@/widgets/Page/Page';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { RatingCard } from '@/entities/Rating';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <Page>
            {t('Главная страница')}
            <div>
                <ListBox
                    items={[
                        {
                            value: '1',
                            content: '123',
                        },
                        {
                            value: '2',
                            content: '234',
                            disabled: true
                        },
                        {
                            value: '3',
                            content: '345',
                        },
                    ]}
                value={undefined}
                defaultValue={'Выберите значение'}
                onChange={(value: string) => console.log(value)}
                />
            </div>
        </Page>
    );
};

export default MainPage;
