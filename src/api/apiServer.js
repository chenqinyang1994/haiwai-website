import axios from 'axios';
import config from '../../src/config';
// import qs from 'qs';
// import { message } from 'antd';

const restfulUrl = config.websiteDomain + '';

// message.config({
//     top: 200,
//     duration: 1,
// });

// get方法接口
export function getApiFunction(url, params, successFn, faildFn) {
    const urls = restfulUrl + url;
    const headers = {
        Accept: 'application/json', // 通过头指定，获取的数据类型是JSON
    };
    if (localStorage.getItem('access_token')) {
        // 传输token
        headers.Authorization = localStorage.getItem('access_token');
    }
    return axios({
        method: 'get',
        url: urls,
        params: params,
        // params: JSON.stringify(Object.assign({}, commonParams, params)),
        headers: headers,
    })
        .then(function (response) {
            response = response.data;
            const error = response.message;

            if (response.errCode && response.errCode !== 0) {
                if (!faildFn) {
                    error
                        ? console.error(error)
                        : console.error(response.message);
                    Promise.reject();
                    return;
                }

                if (faildFn.toString().indexOf('message') < 0) {
                    console.error(error);
                }
                faildFn && faildFn(response);

                return false;
            }
            if (typeof successFn === 'function') {
                successFn(response);
            }
            return response;
        })
        .catch(function (error) {
            console.error(error || 'System error.');
        });
}

// post方法接口
export function postApiFunction(url, params, successFn, faildFn) {
    const urls = restfulUrl + url;
    // const urls = url;
    const headers = {
        // Accept: 'application/json', // 通过头指定，获取的数据类型是JSON
        // 'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*',
    };
    if (localStorage.getItem('access_token')) {
        // 传输token
        headers.Authorization = localStorage.getItem('access_token');
    }
    return axios({
        method: 'post',
        url: urls,

        data: JSON.stringify(params),
        // data: Object.assign({}, commonParams, params),
        // data: JSON.stringify(Object.assign({}, commonParams, params)),
        headers: headers,
    })
        .then(function (response) {
            response = response.data;
            const error = response.message;

            if (
                response.errCode &&
                response.errCode !== 0 &&
                response.errCode !== 8011
            ) {
                // const errCodeNotCatchArr = [100002, 5000, 100001, 100005, 100004, 9004];
                // 100002：发布失败，有列表，5000：发布失败，仅提示， 100001：设备不存在, 100005：单次发布不能超过100个， 100004：单次发布不能超过1000个, 9004：导入文件不能超过5000条
                // if (errCodeNotCatchArr.includes(response.errCode)) {
                //     return response;
                // }
                if (!faildFn) {
                    error
                        ? console.error(error)
                        : console.error(response.message);
                    Promise.reject();
                    return;
                }
                if (faildFn.toString().indexOf('message') < 0) {
                    console.error(error);
                }
                if (typeof faildFn === 'function') {
                    faildFn(response);
                }

                return false;
            }
            if (typeof successFn === 'function') {
                successFn(response);
            }
            return response;
        })
        .catch(function (error) {
            console.error(error || 'System error.');
            // return [];
        });
}
