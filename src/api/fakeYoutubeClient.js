import axios from "axios";

export default class FakeYoutubeClient {
  async search({ params }) {
    return axios.get(
      `/videos/${params.channelId ? "channelVideos" : "search"}.json`
    );
  }

  async videos() {
    return axios.get(`/videos/popular.json`);
  }

  async channels() {
    return axios.get(`/videos/channel.json`);
  }

  // async playlist() {
  //   return axios.get(`/videos/channelVideos.json`);
  // }
}
