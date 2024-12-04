// import React, { useEffect, useLayoutEffect, useState } from 'react';
// import axios from 'axios';

// const Portfolio = () => {
//   const [portfolioData, setPortfolioData] = useState([]);
//   const [playingVideo, setPlayingVideo] = useState(null);

//   useEffect(() => {
//     const fetchPortfolioData = async () => {
//       try {
//         const response = await axios.get(
//           `https://v1.nocodeapi.com/kratos/google_sheets/ZjSTBYvGFEQTvlAK?tabId=Sheet1`
//         );
//         console.log("API Response:", response.data);

//         const formattedData = response.data.data.map((row) => ({
//           title: row["Title"],
//           description: row["Description"],
//           imageUrl: row["Image URL "],
//           videoUrl: row["Video URL "],
//         }));

//         setPortfolioData(formattedData);
//       } catch (error) {
//         console.error("Error fetching data", error);
//       }
//     };

//     fetchPortfolioData();
//   }, []);

//   const handleVideoClick = (videoUrl) => {
//     setPlayingVideo(videoUrl);
//   };

//   // Function to extract YouTube video ID and return the embed URL
//   const getEmbedUrl = (videoUrl) => {
//     const videoId = videoUrl.split("v=")[1]?.split("&")[0]; // Extract video ID from URL
//     return `https://www.youtube.com/embed/${videoId}`;
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>My Portfolio</h1>
//       <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
//         {portfolioData.map((item, index) => (
//           <div
//             key={index}
//             style={{
//               border: "1px solid #ddd",
//               borderRadius: "8px",
//               padding: "15px",
//               boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
//             }}
//           >
//             <h2>{item.title}</h2>
//             <p>{item.description}</p>
//             {item.imageUrl && (
//               <img
//                 src={item.imageUrl}
//                 alt={item.title}
//                 style={{ width: "100%", height: "auto", borderRadius: "4px" }}
//               />
//             )}
//             {item.videoUrl && !playingVideo && (
//               <div style={{ marginTop: "10px" }}>
//                 <button
//                   onClick={() => handleVideoClick(item.videoUrl)}
//                   style={{
//                     padding: "10px 20px",
//                     backgroundColor: "#007bff",
//                     color: "#fff",
//                     border: "none",
//                     borderRadius: "4px",
//                     cursor: "pointer",
//                   }}
//                 >
//                   Watch Video
//                 </button>
//               </div>
//             )}
//             {playingVideo === item.videoUrl && (
//               <div style={{ marginTop: "10px" }}>
//                 <iframe
//                   width="100%"
//                   height="315"
//                   src={`${item.videoUrl}?autoplay=1`}
//                   title="Video player"
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 ></iframe>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// option 2 code 
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Portfolio = () => {
//   const [portfolioData, setPortfolioData] = useState([]);
//   const [playingVideo, setPlayingVideo] = useState(null); // State to track playing video

//   useEffect(() => {
//     const fetchPortfolioData = async () => {
//       try {
//         const response = await axios.get(
//           `https://v1.nocodeapi.com/kratos/google_sheets/ZjSTBYvGFEQTvlAK?tabId=Sheet1`
//         );

//         const formattedData = response.data.data.map((row) => ({
//           title: row["Title"],
//           description: row["Description"],
//           imageUrl: row["Image URL "], 
//           videoUrl: row["Video URL "],  // The video URL here can now be the full embed URL
//         }));

//         setPortfolioData(formattedData);
//       } catch (error) {
//         console.error("Error fetching data", error);
//       }
//     };

//     fetchPortfolioData();
//   }, []);

//   // Handle Video Click: Set the playing video URL
//   const handleVideoClick = (videoUrl) => {
//     setPlayingVideo(videoUrl);
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>My Portfolio</h1>
//       <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
//         {portfolioData.map((item, index) => (
//           <div
//             key={index}
//             style={{
//               border: "1px solid #ddd",
//               borderRadius: "8px",
//               padding: "15px",
//               boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
//             }}
//           >
//             <h2>{item.title}</h2>
//             <p>{item.description}</p>
//             {item.imageUrl && (
//               <img
//                 src={item.imageUrl}
//                 alt={item.title}
//                 style={{ width: "100%", height: "auto", borderRadius: "4px" }}
//               />
//             )}
//             {item.videoUrl && playingVideo !== item.videoUrl && (
//               <div style={{ marginTop: "10px" }}>
//                 <button
//                   onClick={() => handleVideoClick(item.videoUrl)}
//                   style={{
//                     padding: "10px 20px",
//                     backgroundColor: "#007bff",
//                     color: "#fff",
//                     border: "none",
//                     borderRadius: "4px",
//                     cursor: "pointer",
//                   }}
//                 >
//                   Watch Video
//                 </button>
//               </div>
//             )}
//             {playingVideo === item.videoUrl && (
//               <div style={{ marginTop: "10px" }}>
//                 <iframe
//                   width="100%"
//                   height="315"
//                   src={item.videoUrl + "?autoplay=1"} // Use the full embed URL from spreadsheet
//                   title="Video player"
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 ></iframe>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };


// 3 option code 

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Portfolio = () => {
//   const [portfolioData, setPortfolioData] = useState([]);

//   useEffect(() => {
//     const fetchPortfolioData = async () => {
//       try {
//         const response = await axios.get(
//           `https://v1.nocodeapi.com/YOUR_USERNAME/google_sheets/YOUR_API_KEY?tabId=Sheet1`
//         );

//         console.log("API Response:", response.data);

//         const formattedData = response.data.data.map((row) => ({
//           title: row["Title"],
//           description: row["Description"],
//           imageUrl: row["Image URL "],
//           videoUrl: row["Video URL "],
//         }));

//         setPortfolioData(formattedData);
//       } catch (error) {
//         console.error("Error fetching data", error);
//       }
//     };

//     fetchPortfolioData();
//   }, []);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>My Portfolio</h1>
//       <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
//         {portfolioData.map((item, index) => (
//           <div
//             key={index}
//             style={{
//               border: "1px solid #ddd",
//               borderRadius: "8px",
//               padding: "15px",
//               boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
//             }}
//           >
//             <h2>{item.title}</h2>
//             <p>{item.description}</p>
//             {item.imageUrl && (
//               <img
//                 src={item.imageUrl}
//                 alt={item.title}
//                 style={{ width: "100%", height: "auto", borderRadius: "4px" }}
//               />
//             )}
//             {item.videoUrl && (
//               <div style={{ marginTop: "10px" }}>
//                 {/* Custom video URL (e.g., YouTube or Vimeo) */}
//                 <iframe
//                   width="100%"
//                   height="315"
//                   src={item.videoUrl}
//                   title="Video player"
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                   style={{ borderRadius: "4px" }}
//                 ></iframe>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState([]);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const response = await axios.get(
          `https://v1.nocodeapi.com/kratos/google_sheets/ZjSTBYvGFEQTvlAK?tabId=Sheet1`
        );

        console.log("API Response:", response.data);

        const formattedData = response.data.data.map((row) => ({
          title: row["Title"],
          description: row["Description"],
          imageUrl: row["Image URL "],
          videoUrl: row["Video URL "],
        }));

        setPortfolioData(formattedData);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchPortfolioData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>My Portfolio</h1>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        {portfolioData.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "15px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            {item.imageUrl && (
              <img
                src={item.imageUrl}
                alt={item.title}
                style={{ width: "100%", height: "auto", borderRadius: "4px" }}
              />
            )}
            {item.videoUrl && (
              <div style={{ marginTop: "10px" }}>
                {/* Custom video URL (e.g., YouTube or Vimeo) */}
                <iframe
                  width="100%"
                  height="315"
                  src={item.videoUrl}
                  title="Video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ borderRadius: "4px" }}
                ></iframe>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};






export default Portfolio;
