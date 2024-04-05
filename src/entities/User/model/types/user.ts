import { FeaturesFlags } from '@/shared/types/featuresFlags';
import { UserRole } from '../consts/UserRole';
import { jsonSettings } from './jsonSettings';

export interface User {
    id: string;
    username: string;
    avatar?: string;
    roles?: UserRole[];
    features?: FeaturesFlags;
    jsonSettings?: jsonSettings;
}

export interface UserSchema {
    authData?: User;

    _inited: boolean;
}
