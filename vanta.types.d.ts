declare module "vanta/src/vanta.globe" {
  interface VantaOptions {
    el: HTMLElement;
    color?: number;
    backgroundColor?: number;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    scale?: number;
    scaleMobile?: number;
  }

  interface VantaInstance {
    setOptions(options: VantaOptions): void;
    destroy(): void;
  }

  const GLOBE: (options: VantaOptions) => VantaInstance;
  export default GLOBE;
}
