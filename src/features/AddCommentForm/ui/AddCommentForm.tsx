import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './AddCommentForm.module.scss';
import { addCommentFormActions, addCommentFormReducer } from '../model/slices/addCommentFormSlice';
import { getAddCommentFormError, getAddCommentFormText } from '../model/selectors/AddCommentForm';

export interface AddCommentFormProps {
    className?: string,
    onSendComment: (text: string) => void,
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = ({ className, onSendComment }: AddCommentFormProps) => {
    const { t } = useTranslation();
    const AddCommentFormText = useSelector(getAddCommentFormText);
    const AddCommentFormError = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        dispatch(addCommentFormActions.clearInput());
        onSendComment(AddCommentFormText || '');
    }, [dispatch, onSendComment, AddCommentFormText]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    placeholder={t('Введите текст комментария')}
                    value={AddCommentFormText}
                    onChange={onCommentTextChange}
                    className={cls.AddCommentFormInput}
                />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    className={cls.AddCommentFormBtn}
                    onClick={onSendHandler}
                >
                    {t('Отправить')}
                </Button>
                {AddCommentFormError && <Text theme={TextTheme.PRIMARY} text={AddCommentFormError} />}
            </div>
        </DynamicModuleLoader>
    );
};

export default AddCommentForm;
