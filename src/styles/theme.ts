// styled components
const breakpoints = {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
    xxl2:1600
  }
  
  const mq = (breakpoint: TBreakPoints) => `@media (min-width: ${breakpoints[breakpoint]}px)`
  
  const mqMax = (breakpoint: TBreakPoints) => `@media (max-width: ${breakpoints[breakpoint] - 0.0001}px)`
  
  const vw = (size: number, width = 1920) => `${(size / width) * 100}vw`
  const vh = (size: number, height = 1080) => `${(size / height) * 100}vh`
  
  export const theme = {
    mq,
    mqMax,
    vh,
    vw,
    breakpoints,
    colors: {
      dark: '#000000',
      white: '#ffffff',
    },
    containers: {
      main: '1209px',
      full: '1920px',
    },
  }
  
  export type TBreakPoints = keyof typeof breakpoints