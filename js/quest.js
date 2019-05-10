import api from './api.js';
import createChoice from './create-choice.js';
import loadProfile from './load-profile.js';

const user = api.getUser();
loadProfile();