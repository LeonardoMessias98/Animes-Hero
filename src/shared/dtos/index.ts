export interface IAnimeProps {
  attributes: {
    abbreviatedTitles: string[];
    ageRating: string;
    ageRatingGuide: string;
    averageRating: string;
    canonicalTitle: string;
    coverImage: { tiny: string; large: string; small: string };
    coverImageTopOffset: number;
    createdAt: string;
    description: string;
    endDate: string;
    episodeCount: number;
    episodeLength: number | null;
    favoritesCount: number;
    nextRelease: string | null;
    nsfw: boolean;
    popularityRank: number;
    posterImage: {
      tiny: string;
      large: string;
      small: string;
      medium: string;
      original: string;
    };
    ratingFrequencies: any;
    ratingRank: number;
    showType: string;
    slug: string;
    startDate: string;
    status: string;
    subtype: string;
    synopsis: string;
    tba: null;
    titles: { en: string; en_jp: string; ja_jp: string };
    totalLength: number;
    updatedAt: string;
    userCount: number;
    youtubeVideoId: string;
  };
  id: string;
  links: { self: string };
}
