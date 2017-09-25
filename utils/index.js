
import axios from 'axios';

import {
  API_URL
} from '../constants';

// partialed functions

// api functions

export const apiPost = partial(apiReq, 'post');
export const apiGet = partial(apiReq, 'get');
export const apiPut = partial(apiReq, 'put');
export const apiDelete = partial(apiReq, 'delete');

// create endpoints

export const postApi = partial(partial, apiPost);
export const getApi = partial(partial, apiGet);
export const deleteApi = partial(partial, apiDelete);
export const putApi = partial(partial, apiPut);

//

export const postApiWithToken = partial(appendParams, postApi);
export const getApiWithToken = partial(appendParams, getApi);
export const deleteApiWithToken = partial(appendParams, deleteApi);
export const putApiWithToken = partial(appendParams, putApi);

// partial actions

export const actionCreator = partial(partial, action)

export function appendParams (method, endPoint, params) {
  const urlString = params.join('/');
  return method(`${endPoint}${urlString}`);
}

export function apiReq (method, endPoint, data = {}, headers = {}) {
  return new Promise ((res, rej) => {

    headers = {
      ...headers
    }

    if(method == 'get') {
      data = {
        params: data,
        headers
      }
    }

    axios[method](API_URL + endPoint, data, {headers}).then((result) => {
      let {data} = result;
      return res(data);
    }).catch((err) => {
      return rej(err);
    });

  })
}

/* Partilal utility to compose new functions */

export function partial(fn,...presetArgs) {
  return function partiallyApplied(...laterArgs){
    return fn( ...presetArgs, ...laterArgs );
  };
}

export function action (type, payload = null) {
  return {
    type,
    payload
  }
}