import axios from "axios"

const KEY = "AIzaSyAXqclV86BJ8eXBrCUm7nfqomsH9gNTHGQ"

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResult: 5,
    key: KEY,
  },
})
