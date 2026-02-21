import { Star } from "lucide-react";

type StarRatingProps = {
  rating: number;
  maxStars?: number;
};

const StarRating = ({ rating, maxStars = 5 }: StarRatingProps) => {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: maxStars }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={
            i < Math.floor(rating)
              ? "fill-rating text-rating"
              : i < rating
              ? "fill-rating/50 text-rating"
              : "text-border fill-border"
          }
        />
      ))}
    </div>
  );
};

export default StarRating;
