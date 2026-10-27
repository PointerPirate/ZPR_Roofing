import { Star } from "lucide-react";
import { fetchGoogleReviews } from "@/lib/google-reviews";

export async function GoogleReviews({
  heading = "What Our Customers Say",
  subhead,
  compact = false,
}: {
  heading?: string;
  subhead?: string;
  compact?: boolean;
}) {
  const { reviews, rating, total, source } = await fetchGoogleReviews();

  return (
    <section className={`${compact ? "py-16" : "py-24"} px-6 bg-secondary/30`}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            {source === "live" && rating ? (
              <span className="text-sm text-muted-foreground">
                {rating.toFixed(1)} on Google ({total} reviews)
              </span>
            ) : (
              <span className="text-sm text-muted-foreground">Rated on Google</span>
            )}
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold mb-3 text-balance">
            {heading}
          </h2>
          {subhead && <p className="text-muted-foreground max-w-xl mx-auto text-balance">{subhead}</p>}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 6).map((r, i) => (
            <article
              key={i}
              className="p-6 rounded-2xl bg-background border border-border flex flex-col"
            >
              <div className="flex gap-0.5 mb-3">
                {[...Array(r.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-sm font-medium text-foreground">{r.author}</span>
                {r.relativeTime && (
                  <span className="text-xs text-muted-foreground">{r.relativeTime}</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
