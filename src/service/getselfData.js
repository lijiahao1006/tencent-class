import { API } from "@/utils/config";
import HTTP from "@/utils/http";

export default class SelfData extends HTTP {
  getself(field) {
    return new Promise(resolve => {
      this.ajax({
        url: API.getselfData + field,
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
