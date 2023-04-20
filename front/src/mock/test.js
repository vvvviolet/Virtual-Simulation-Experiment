import Mock from 'mockjs';


Mock.mock('api/test', 'get', ({}) => {
    return 'Hello from mock';
  });
  