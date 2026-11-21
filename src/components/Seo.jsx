import { site } from '../data/siteData'

export default function Seo({ title, description, path = '/' }) {
  const fullTitle = title ? `${title} | ${site.name}` : site.name
  const url = `${site.url}${path}`
  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
    </>
  )
}