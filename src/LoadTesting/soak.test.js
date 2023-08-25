import http from 'k6/http';
import { sleep } from 'k6';
import * as base from './base.test.js';
export const options = {
    stages: [
        { duration: '10m', target: 16},
        { duration: '1h', target: 16 },
        { duration: '5m', target: 5 },
        { duration: '1m', target: 0 },
    ],
    thresholds: {
        http_req_duration: ['p(95)<600']
    },
};
export default function () {
    http.get(base.API_REVERSE_URL);
    sleep(1);
}