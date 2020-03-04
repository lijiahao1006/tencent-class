import { API } from "@/utils/config";
import HTTP from "@/utils/http";

export default class IndexData extends HTTP {
  getIndexData() {
    return new Promise(resolve => {
      this.ajax({
        url: API.getCourseData,
        type: "GET",
        dataType: "JSONP",
        jsonpCallback: "callback",
        success(data) {
          resolve(data);
        }
      });
    });
  }
}
