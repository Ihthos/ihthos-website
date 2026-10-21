/**
 * Renders a JSON-LD block. The payload is built from local constants in
 * src/lib/schema.ts, never from user input; the `<` escape keeps a future
 * copy edit from closing the script element early.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
