import request from './axios';

export const getAlgorithmCourse = async (category) => {
  return request.post('/recommendation', { category });
};
