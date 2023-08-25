import http from 'k6/http';
import { sleep } from 'k6';
import * as base from './base.test.js';

export default function () {
    http.get(base.API_REVERSE_URL);
    sleep(1);
}