const GOOGLE_API_KEY = "AIzaSyCczi_K4z1U47-3kC4XPofhiju2T-tdZGs"
export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;
export const YOUTUBE_SEARCH_API =
  "https://thingproxy.freeboard.io/fetch/http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
