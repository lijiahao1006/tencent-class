const BASE_URL = 'http://txcourseapi.jsplusplus.com/';

const API = {
	getCourseData: BASE_URL + 'course/get_course_datas',
	getCourses: BASE_URL + 'course/get_courses/',
	getCourseFields: BASE_URL + 'course/get_course_fields'
}

const PULL_DOWN_TEXT = {
	PULLING: '正在加载中...',
	FINISHED: '加载完成',
	ORIGIN: ''
}

export {
  API,
  PULL_DOWN_TEXT
};