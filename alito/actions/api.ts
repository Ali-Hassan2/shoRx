const BASE_URL = `http://localhost:5006`;

const API_ENDPOINTS = {
  getChatResponse: `${BASE_URL}/chat/getresponse`,
  getBlogs: `${BASE_URL}/blog/gettingblog`,
  adminsignup: `${BASE_URL}/admin/signup`,
  adminlogin: `${BASE_URL}/admin/login`,
  getsingleBlog: `${BASE_URL}/blog/getsingleblog`,
  adminlogout: `${BASE_URL}/admin/logout`,
};

export { API_ENDPOINTS };
