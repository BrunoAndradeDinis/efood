declare module 'react-icons/*' {
  import * as React from 'react'
  const icons: {
    [key: string]: React.ComponentType<
      React.SVGProps<SVGSVGElement> & { title?: string }
    >
  }
  export = icons
}

declare module 'react-icons' {
  import * as React from 'react'
  export type IconType = React.ComponentType<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >
}
