import { cleanup } from '@testing-library/react';
import { server } from './server';

// mockサーバーを使用するテストのbeforeAllで使用する
export const initMocks = () => {
  server.listen();
};

// mockサーバーを使用するテストのafterEachで使用する
export const resetMocks = () => {
  server.resetHandlers();
  cleanup();
};

// mockサーバーを使用するテストのafterAllで使用する
export const closeMocks = () => {
  server.close();
};
