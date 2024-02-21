import { UtilityKeys } from '@constants/localStorage';

export const setIsApp = () => localStorage.setItem(UtilityKeys.IS_APP, 'true');

export const getIsApp = () => localStorage.getItem(UtilityKeys.IS_APP);

type Inset = { top: string; bottom: string };
export const setPadding = ({ top, bottom }: Inset) =>
  localStorage.setItem(UtilityKeys.PADDING, JSON.stringify({ top, bottom }));

export const getPadding = (): Inset => {
  const padding = JSON.parse(
    localStorage.getItem(UtilityKeys.PADDING) ??
      JSON.stringify({ top: 0, bottom: 0 }),
  );
  return padding;
};
