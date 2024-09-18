// src/MediaPage.tsx
import React from 'react';

// Sample video data
const VIDEO_CATEGORIES = [
  {
    id: 1,
    category: 'Tent Setup',
    videos: [
      {
        id: 1,
        title: 'How to Set Up a Tent',
        thumbnail: 'https://via.placeholder.com/300x200', // Sample thumbnail
        description: 'A step-by-step guide to setting up your camping tent.',
        url: 'https://www.youtube.com/watch?v=dummy1', // Example YouTube link
      },
      {
        id: 2,
        title: 'Tent Maintenance Tips',
        thumbnail: 'https://via.placeholder.com/300x200',
        description: 'Learn how to maintain your tent for long-lasting use.',
        url: 'https://www.youtube.com/watch?v=dummy2',
      },
    ],
  },
  {
    id: 2,
    category: 'Camping Cooking',
    videos: [
      {
        id: 1,
        title: 'Campfire Cooking: Easy Recipes',
        thumbnail: 'https://via.placeholder.com/300x200',
        description: 'Simple and tasty recipes for cooking at your campsite.',
        url: 'https://www.youtube.com/watch?v=dummy3',
      },
      {
        id: 2,
        title: 'Portable Cooking Gear',
        thumbnail: 'https://via.placeholder.com/300x200',
        description: 'The best portable cooking gear for campers.',
        url: 'https://www.youtube.com/watch?v=dummy4',
      },
    ],
  },
  {
    id: 3,
    category: 'First Aid & Safety',
    videos: [
      {
        id: 1,
        title: 'First Aid Tips for Campers',
        thumbnail: 'https://via.placeholder.com/300x200',
        description: 'Learn basic first aid skills while camping.',
        url: 'https://www.youtube.com/watch?v=dummy5',
      },
      {
        id: 2,
        title: 'Dealing with Emergencies',
        thumbnail: 'https://via.placeholder.com/300x200',
        description: 'How to handle common camping emergencies.',
        url: 'https://www.youtube.com/watch?v=dummy6',
      },
    ],
  },
];

const works: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Camping Help Videos</h2>

      {/* Loop through each category */}
      {VIDEO_CATEGORIES.map((category) => (
        <div key={category.id} className="mb-8">
          {/* Category Title */}
          <h3 className="text-xl font-semibold text-green-600 mb-4">{category.category}</h3>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.videos.map((video) => (
              <div key={video.id} className="bg-white shadow-lg rounded-lg p-4">
                {/* Video Thumbnail */}
                <a href={video.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                </a>

                {/* Video Title */}
                <h4 className="text-lg font-semibold text-gray-800">{video.title}</h4>

                {/* Video Description */}
                <p className="text-sm text-gray-600 mt-2">{video.description}</p>

                {/* Watch Button */}
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Watch Now
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default works;
