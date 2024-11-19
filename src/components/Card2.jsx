import React from "react";

function Card2({ 
  imageUrl, 
  category, 
  title, 
  description, 
  authorName, 
  authorImage, 
  timeAgo 
}) {
  return (
    <div className="rounded-3xl w-80 shadow-xl">
      <img
        src={imageUrl}
        alt={title}
        className="rounded-t-3xl w-full h-56"
      />
      <div className="p-5">
        <div className="space-y-3 mb-6">
          <span className="rounded-full px-2 py-1 bg-gradient-to-b from-blue-500 to-blue-300 text-white">
            {category}
          </span>
          <h1 className="text-2xl font-semibold">{title}</h1>
          <p className="line-clamp-4 leading-tight">
            {description}
          </p>
        </div>
        <div className="flex items-center">
          <img
            src={authorImage}
            alt={authorName}
            className="w-10 h-10 rounded-full mr-2"
          />
          <div>
            <h2 className="font-semibold">{authorName}</h2>
            <p className="text-gray-500">{timeAgo}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card2;
