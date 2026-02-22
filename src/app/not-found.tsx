import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="container-padded py-16">
      <div className="card p-8">
        <h1 className="font-display text-3xl font-extrabold">Page not found</h1>
        <p className="mt-2 text-sm text-muted">
          Seedly couldn’t find that page. Let’s head back home.
        </p>
        <Link href="/" className="btn-primary mt-6 inline-flex no-underline">
          Go home
        </Link>
      </div>
    </main>
  );
}
