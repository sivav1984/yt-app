import axios from "axios";
const KEY = "AIzaSyAdAuWimHLAO0nJlUIrjHUgoUOkmbm9KGU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
