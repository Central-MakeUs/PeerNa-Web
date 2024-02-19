import { UtilityKeys } from '@constants/localStorage';

export const setIsApp = () => localStorage.setItem(UtilityKeys.IS_APP, 'true');

export const getIsApp = () => localStorage.getItem(UtilityKeys.IS_APP);
