import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as StarOutlineIcon } from "@heroicons/react/24/outline";

interface StarsRatingProps {
    rating: number; 
    totalReviews?: number;
}

export const StarsRating: React.FC<StarsRatingProps> = ({ rating, totalReviews }) => {
    return (
        <div className="flex flex-col items-center">
            <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                    index < rating ? (
                        <StarIcon key={index} className="h-6 w-6 text-yellow-500" />
                    ) : (
                        <StarOutlineIcon key={index} className="h-6 w-6 text-gray-300" />
                    )
                ))}
            </div>
            {totalReviews !== undefined && (
                <p className="text-sm text-gray-500 mt-1">
                    {rating.toFixed(1)} de 5.0 ({totalReviews} avaliações)
                </p>
            )}
        </div>
    );
};

export default StarsRating;
