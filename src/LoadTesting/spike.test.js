import http from 'k6/http';
import { sleep } from 'k6';
import * as base from './base.test.js';
export const options = {
    stages: [
        { duration: '5s', target: 200 },
        { duration: '1m', target: 200 },
        { duration: '5s', target: 0 },
    ],
    thresholds: {
        http_req_duration: ['p(95)<600']
    },
};
export default function () {
    http.get(base.API_REVERSE_URL);
    sleep(1);
}