export * from './ui/UI';

export { UIscrollSchema as UIschema, ScrollSchema } from './model/types/UIUIscrollSchema';

export { UIscrollSliceReducer, UIscrollSliceActions } from './model/slice/UIscrollSlice';
export { getUIScrollByPath } from './model/selectors/getUIScroll';
