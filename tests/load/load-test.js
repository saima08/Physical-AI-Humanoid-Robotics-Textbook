import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 10, // 10 virtual users
  duration: '30s', // for 30 seconds
};

export default function () {
  http.get('http://localhost:3000');
  sleep(1);
}
