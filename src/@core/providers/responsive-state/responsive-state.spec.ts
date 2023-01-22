import { ResponsiveState } from './responsive-state';
import { ResponsiveConfig } from '../responsive-config';
import { IResponsiveConfig } from '../../interfaces';
// constants speca

describe('ResponsiveState', () => {

  beforeEach(() => {
    // create a new instance of the ResponsiveState
    let responsiveState: ResponsiveState;
    let responsiveConfig: ResponsiveConfig;
    const config: IResponsiveConfig = {
      breakPoints: {
        xs: { max: 575 },
        sm: { min: 576, max: 767 },
        md: { min: 768, max: 991 },
        lg: { min: 992, max: 1199 },
        xl: { min: 1200, max: 1399 },
        xxl: { min: 1400 },
      },
      debounceTime: 100
    };

    beforeEach(() => {
      responsiveConfig = new ResponsiveConfig(config);
      responsiveState = new ResponsiveState(responsiveConfig);
    });

    afterEach(() => {
      responsiveConfig = null;
      responsiveState = null;
    });

    it('getDevicePixelRatio', () => {
      const spy = spyOn(responsiveState, 'getDevicePixelRatio').and.returnValue(1);
      expect(responsiveState.getDevicePixelRatio()).toBe(1);
      expect(responsiveState.getDevicePixelRatio).toHaveBeenCalled();
    });
  });

});
