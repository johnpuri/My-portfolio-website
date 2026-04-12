// Type declarations for gsap-trial plugins which ship without .d.ts files
declare module 'gsap-trial/SplitText' {
  export class SplitText {
    chars: Element[];
    words: Element[];
    lines: Element[];
    constructor(targets: any, vars?: any);
    revert(): void;
  }
}

declare module 'gsap-trial/ScrollSmoother' {
  export class ScrollSmoother {
    static create(vars?: any): ScrollSmoother;
    static refresh(safe?: boolean): void;
    scrollTop(value?: number): number;
    paused(value?: boolean): ScrollSmoother;
    scrollTo(target: any, smooth?: boolean, position?: string): void;
  }
}
