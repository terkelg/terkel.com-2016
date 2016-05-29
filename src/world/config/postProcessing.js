import { BlendMode } from '@superguigui/wagner';
import MultiPassBloomPass from '@superguigui/wagner/src/passes/bloom/MultiPassBloomPass';
import NoisePass from '@superguigui/wagner/src/passes/noise/noise';
import FXAAPass from '@superguigui/wagner/src/passes/fxaa/FXAAPass';
import MotionBlur from '@superguigui/wagner/src/passes/motion-blur/motion-blur';
import Vignette from '@superguigui/wagner/src/passes/vignette/VignettePass';
import DOF from '@superguigui/wagner/src/passes/dof/DOFPass';

export default {
  active: false,
  effectComposer: {
    useRGBA: true
  },
  passes: [
    {
      name: 'motionBlur',
      active: false,
      constructor: new MotionBlur()
    },
    {
      name: 'dof',
      active: true,
      constructor: new DOF({
        blurAmount: 0.2,
        aperture: 0.001,
        focalDistance: 0.05
      })
    },
    {
      name: 'vignettePass',
      active: true,
      constructor: new Vignette({
        boost: 1,
        reduction: 0.03
      })
    },
    {
      name: 'multiPassBloomPass',
      active: false,
      constructor: new MultiPassBloomPass({
        blurAmount: 0.8,
        applyZoomBlur: false,
        zoomBlurStrength: 0.2,
        blendMode: BlendMode.Darken
      })
    },
    {
      name: 'noisePass',
      active: true,
      constructor: new NoisePass({
        amount: 0.02,
        speed: 0.2
      })
    },
    {
      name: 'fxaaPass',
      active: false,
      constructor: new FXAAPass()
    }
  ]
};
