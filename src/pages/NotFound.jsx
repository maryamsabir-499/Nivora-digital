import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="py-32 text-center">
      <title>Page not found</title>
      <meta name="robots" content="noindex" />
      <h1 className="text-5xl font-extrabold text-navy">404</h1>
      <p className="mt-4 text-slate-500">This page does not exist.</p>
      <Link to="/" className="inline-block mt-8 bg-navy text-brand px-8 py-4 rounded-xl font-semibold">Back to Home</Link>
    </section>
  )
}