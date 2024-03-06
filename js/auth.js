import axios from 'axios';
import { Service } from 'axios-middleware';

const VUE_APP_AUTHORITY_SERVICE= 'https://permissionext.applecity.kz/auth_service'
const VUE_APP_SIGN_ID = 'fd3672d6-50da-42d2-9b1e-8286ccb23708'

const base_url = '/';
let person_info = {};


export function InitAuth() {
  if (window.location.pathname.indexOf('/apply-token') >= 0) {
    return getAccessToken();
  }

  return validateToken().then((result) => {
    if (result === true) {
      const service = new Service(axios);
      service.register({
        onResponse(response) {
          if (response.status === 401) {
            goToAuthPage();
          }
          return response;
        }
      });
      return result;
    } else {
      throw 'validate token error' + result;
    }
  });
};


export function GetUserInfo() {
  return person_info;
}


function getAccessToken() {
  const urlParams = new URLSearchParams(window.location.search);
  const redirect_to = urlParams.get('redirect-to');
  const token_id = urlParams.get('token_id');

  const get_url = `${VUE_APP_AUTHORITY_SERVICE}/get-access-token/${VUE_APP_SIGN_ID}/${token_id}`;
  return axios.get(get_url).then((response) => {
    if (!response.data.success) {
      console.log(response.data);
      goToAuthPage();
      return false;
    }

    localStorage.setItem('access.token', response.data.data.token);
    localStorage.setItem('access.expired_at', response.data.data.expired_at);

    window.location.replace(decodeURIComponent(redirect_to));
    return true;
  });
}


function validateToken() {
  return new Promise((resolve, reject) => {
    const cur_token = localStorage.getItem('access.token');

    if (!cur_token){
      goToAuthPage();
      return false;
    }

    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access.token')}`,
        AuthorizationType: 'permission-service'
      }
    }
    const get_url = `${VUE_APP_AUTHORITY_SERVICE}/validate-token/${VUE_APP_SIGN_ID}`;
    axios.get(get_url, config).then((result) => {
      if (!result.data.success) {
        goToAuthPage();
        return false;
      }

      person_info = result.data.data.person;
      resolve(true);
    }, (err) => {
      goToAuthPage(err);
      reject(err);
    });
  });
}


function goToAuthPage(errData) {
  if (errData) {console.error(errData);}

  localStorage.setItem('access.token', '');
  let redirect_uri = base_url;
  if ((window.location.pathname.indexOf('/apply-token') === -1)) {
    redirect_uri = encodeURIComponent(`${window.location.pathname}${window.location.search}`);
  }
  window.location.replace(`${VUE_APP_AUTHORITY_SERVICE}/sign/${VUE_APP_SIGN_ID}?redirect-to=${redirect_uri}`);
}
