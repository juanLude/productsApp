import {Platform} from 'react-native';

import axios from 'axios';
import {STAGE, API_URL_ANDROID, API_URL_IOS, API_URL as PROD_URL} from '@env';

export const API_URL =
  STAGE === 'prod'
    ? PROD_URL
    : Platform.OS === 'ios'
    ? API_URL_IOS
    : API_URL_ANDROID;

const tesloApi = axios.create({
  baseURL: 'https://',
});