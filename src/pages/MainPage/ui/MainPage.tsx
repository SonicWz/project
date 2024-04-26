import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';
import { ListBox } from '@/shared/ui/deprecated/Popups';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <Page data-testid={'MainPage'}>
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
                            disabled: true,
                        },
                        {
                            value: '3',
                            content: '345',
                        },
                    ]}
                    value={undefined}
                    defaultValue="Выберите значение"
                    onChange={(value: string) => console.log(value)}
                />
            </div>
        </Page>
    );
};

export default MainPage;
