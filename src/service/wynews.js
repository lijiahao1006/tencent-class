import { API } from "@/utils/config";
import HTTP from "@/utils/http";

export default class NewsData extends HTTP {
  NewsData() {
    return new Promise(resolve => {
      this.ajax({
        url: API.getyqNews,
        type: "GET",
        dataType: "JSON",
        // jsonpCallback: "callback",
        success(data) {
          resolve(data);
        }
      });
    });
  }
}
