import { FeaturesFlags } from "@/shared/types/featuresFlags";

// ФИЧИ НЕ МЕНЯЮТСЯ В ХОДЕ СЕССИИ, ИХ НЕОБЯЗАТЕЛЬНО ДЕЛАТЬ РЕАКТИВНЫМИ!
let featuresFlags: FeaturesFlags;

export function setFeaturesFlags(newFeatureFlags?: FeaturesFlags) {
  if (newFeatureFlags) {
    featuresFlags = newFeatureFlags;
  }
}

export function getFeaturesFlags(flag: keyof FeaturesFlags) {
  return featuresFlags[flag];
}
