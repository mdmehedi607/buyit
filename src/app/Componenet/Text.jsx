'use client'

import { useLocale } from 'next-intl'

export default function Text({ children, as: Component = 'p', className = '', ...props }) {
  const locale = useLocale()
  const isBangla = locale === 'bn'

  return (
    <Component className={`${isBangla ? 'bangla' : ''} ${className}`} {...props}>
      {children}
    </Component>
  )
}

