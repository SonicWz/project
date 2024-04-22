import { FeaturesFlags } from "@/shared/types/featuresFlags";
import { getFeaturesFlags } from "./setGetFeatures";

interface ToggleFeaturesOptions<T> {
  name: keyof FeaturesFlags;
  on: () => T;
  off: () => T;
}

export function toggleFeatures<T>({
  off,
  on,
  name,
}: ToggleFeaturesOptions<T>): T {
  if (getFeaturesFlags(name)) {
    return on();
  }

  return off();
}
