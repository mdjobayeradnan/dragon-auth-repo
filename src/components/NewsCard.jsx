import React from 'react';
import { FaEye, FaStar } from 'react-icons/fa';
import { BsBookmark, BsShare } from 'react-icons/bs';

const NewsCard = ({ news }) => {
  const { title, image_url, details, rating, total_view, author = {} } = news;
  const { img, name, published_date } = author;

  return (
    <div className="rounded-xl border shadow-sm p-4 space-y-3 bg-white">
      {/* Author & Actions */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src={img}
            alt={name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="text-sm">
            <p className="font-semibold">{name}</p>
            <p className="text-gray-500 text-xs">
              {published_date?.split(' ')[0] || 'N/A'}
            </p>
          </div>
        </div>
        <div className="flex gap-2 text-gray-600 text-lg">
          <BsBookmark />
          <BsShare />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold">{title}</h2>

      {/* Image */}
      <img
        src={image_url}
        alt="news-thumbnail"
        className="w-full rounded-md"
      />

      {/* Details */}
      <p className="text-sm text-gray-600">
        {details.length > 200 ? (
          <>
            {details.slice(0, 200)}...{' '}
            <span className="text-orange-500 cursor-pointer font-semibold">
              Read More
            </span>
          </>
        ) : (
          details
        )}
      </p>

      {/* Ratings & Views */}
      <div className="flex justify-between items-center text-sm pt-2 border-t">
        <div className="flex items-center gap-1 text-orange-500">
          {Array(Math.round(rating?.number || 0))
            .fill()
            .map((_, i) => (
              <FaStar key={i} />
            ))}
          <span className="text-gray-600 ml-2">{rating?.number}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <FaEye /> <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
