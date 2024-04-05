import { buildSelector } from '@/shared/lib/store';
import { jsonSettings } from '../types/jsonSettings';

const defaultJsonSettings: jsonSettings = {};

export const [useJsonSettings, getJsonSettings] = buildSelector(
    (state) => state.user.authData?.jsonSettings ?? defaultJsonSettings,
);
