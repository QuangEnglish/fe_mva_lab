
// PROD
import {environment} from "../../environments/environment";

export const MenuRouter = {
  getMenu: 'v1/menu/tree',
};

export const Course = {
  getByIdCourseCard: 'course/getByIdCourseCard/',
  getAllCourseCard: 'course/getAllCourseCard/',
};

export const AuthenticationRouter = {
  getToken: `${environment.API_SERVICE}/authen/login`,
  getLoginInfo: `${environment.API_SERVICE}/user/getUserInfo`,
  refreshToken: `${environment.API_SERVICE}/user/refreshToken`,
  forgotPassword: `${environment.API_SERVICE}/authen/forgotpassword`,
  registerUser: `${environment.API_SERVICE}/authen/register`,
  changePassword: `${environment.API_SERVICE}/authen/change-password`,
};

export const navigationRouter = {
  getNavigationOwner: `api/v${environment.API_VERSION}/bsd/navigations/owner`,
};

export const trackingRouter = {
  listTracking: `api/v${environment.API_VERSION}/bsd/logs`,
};



