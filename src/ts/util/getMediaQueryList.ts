import { breakpoint } from '../constant/breakpoint';

/**
 * Get MediaQueryList Function
 * @param { sizeType } - Break points
 * @returns { object } - MediaQueryList
 * ex: getMediaQueryList('md').addEventListener('change', (event) => {if (event.matches) {...}});
 * https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 */

// class infix
type TSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

// max-width or min-width
type TScaleType = 'min' | 'max';

function getMediaQueryList(size: TSizeType, scale: TScaleType = 'min') {
  if (scale === 'max') {
    return window.matchMedia(`(max-width: ${breakpoint[size]})`);
  }
  return window.matchMedia(`(min-width: ${breakpoint[size]})`);
}

export { getMediaQueryList };
