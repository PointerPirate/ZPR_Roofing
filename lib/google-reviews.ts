export interface GoogleReview {
  author: string;
  rating: number;
  text: string;
  relativeTime: string;
  profilePhoto?: string;
}

export interface GoogleReviewsResult {
  reviews: GoogleReview[];
  rating?: number;
  total?: number;
  source: "live" | "fallback";
}

const FALLBACK: GoogleReview[] = [
  {
    author: "Verified Google Review",
    rating: 5,
    text: "Live Google reviews will appear here as soon as the Google Places API key is configured in the site's environment variables.",
    relativeTime: "",
  },
];

export async function fetchGoogleReviews(): Promise<GoogleReviewsResult> {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!key || !placeId) {
    return { reviews: FALLBACK, source: "fallback" };
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${key}`;
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) {
      return { reviews: FALLBACK, source: "fallback" };
    }
    const data = await res.json();
    const result = data?.result;
    if (!result?.reviews) {
      return { reviews: FALLBACK, source: "fallback" };
    }
    const reviews: GoogleReview[] = result.reviews.map((r: {
      author_name: string;
      rating: number;
      text: string;
      relative_time_description: string;
      profile_photo_url?: string;
    }) => ({
      author: r.author_name,
      rating: r.rating,
      text: r.text,
      relativeTime: r.relative_time_description,
      profilePhoto: r.profile_photo_url,
    }));
    return {
      reviews,
      rating: result.rating,
      total: result.user_ratings_total,
      source: "live",
    };
  } catch {
    return { reviews: FALLBACK, source: "fallback" };
  }
}
