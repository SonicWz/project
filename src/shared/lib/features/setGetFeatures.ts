import { useSelector } from 'react-redux';
import { FeaturesFlags } from '@/shared/types/featuresFlags';

let featuresFlags: FeaturesFlags;

export function setFeaturesFlags(newFeaturesFlag?: FeaturesFlags) {
    if (newFeaturesFlag) {
        featuresFlags = newFeaturesFlag;
    }
}

export function getFeaturesFlags(flag: keyof FeaturesFlags) {
    return featuresFlags[flag];
}
