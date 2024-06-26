import { useTranslation } from "react-i18next";
import { memo } from "react";
import { useParams } from "react-router-dom";
import { ArticleDetails } from "@/entities/Article";
import { classNames } from "@/shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Page } from "@/widgets/Page/Page";
import { articleDetailsPageReducer } from "../../model/slices";
import cls from "./ArticleDetailsPage.module.scss";
import { ArticleDetailsPageHeader } from "./ArticleDetailsPageHeader/ArticleDetailsPageHeader";
import { VStack } from "@/shared/ui/deprecated/Stack";
import { ArticleRecommendationList } from "@/features/ArticleRecommendationList";
import { ArticleDetailsComments } from "./ArticleDetailsComments/ArticleDetailsComments";
import { ArticleRating } from "@/features/ArticleRating";
import { getFeaturesFlags, ToggleFeatures } from "@/shared/lib/features";
import { toggleFeatures } from "@/shared/lib/features/toggleFeatures";
import { Card } from "@/shared/ui/deprecated/Card/Card";
interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { t } = useTranslation("article-details");
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return null;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <VStack gap="16" max>
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          {/* {isArticleRatingEnabled && <ArticleRating articleId={id} />} */}
          <ToggleFeatures
            feature="isArticleRatingEnabled"
            on={<ArticleRating articleId={id} />}
            off={<Card>{t("Оценка статей скоро появится!")}</Card>}
          />
          <ArticleRecommendationList />
          <ArticleDetailsComments id={id} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
