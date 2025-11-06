interface BreadcrumbItem {
  name: string
  url: string
}

interface SEOBreadcrumbProps {
  items: BreadcrumbItem[]
}

export function SEOBreadcrumb({ items }: SEOBreadcrumbProps) {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://levaup.com.br${item.url}`
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
    />
  )
}

