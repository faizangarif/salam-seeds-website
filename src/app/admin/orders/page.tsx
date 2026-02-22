import { ShoppingBag, ExternalLink } from "lucide-react";

const setupSteps = [
  {
    step: "1",
    title: "Create a Shopify store",
    desc: "Sign up at shopify.com and add your Salam Seeds products.",
    href: "https://www.shopify.com",
  },
  {
    step: "2",
    title: "Install the Shopify Storefront API",
    desc: "Generate a Storefront API token in your Shopify admin.",
    href: "https://shopify.dev/docs/api/storefront",
  },
  {
    step: "3",
    title: "Add SHOPIFY_STOREFRONT_TOKEN env var",
    desc: "Set the token in your Vercel project environment variables.",
    href: "https://vercel.com/faizangarif-4473s-projects/salam-seeds-website/settings/environment-variables",
  },
  {
    step: "4",
    title: "Build the orders API route",
    desc: "Create /api/admin/orders to fetch orders from Shopify and display them here.",
    href: null,
  },
];

export default function AdminOrdersPage() {
  return (
    <div className="space-y-8">
      {/* Heading */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Orders</h1>
        <p className="mt-1 text-sm text-gray-500">Store order management</p>
      </div>

      {/* Empty state */}
      <div className="rounded-2xl border-2 border-dashed border-gray-200 bg-white p-12 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50">
          <ShoppingBag className="h-7 w-7 text-blue-400" />
        </div>
        <h2 className="mb-2 text-lg font-semibold text-gray-800">Store Pre-Launch</h2>
        <p className="mx-auto max-w-sm text-sm text-gray-500">
          No orders yet — the store hasn&apos;t launched. Connect Shopify to start tracking orders
          here.
        </p>
      </div>

      {/* Setup guide */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="mb-5 text-base font-semibold text-gray-800">
          Shopify Integration Setup Guide
        </h3>
        <ol className="space-y-4">
          {setupSteps.map(({ step, title, desc, href }) => (
            <li key={step} className="flex gap-4">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                {step}
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-gray-800">{title}</p>
                  {href && (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:text-emerald-700"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
                <p className="text-xs text-gray-500">{desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
