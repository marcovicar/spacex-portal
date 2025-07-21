const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './', // diretório do seu projeto Next.js
});

/** @type {import('jest').Config} */
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // resolve "@/components/..."
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // mocka estilos
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js', // mocka imagens
  },
  testMatch: ['**/__tests__/**/*.(test|spec).(ts|tsx)'],
};

module.exports = createJestConfig(customJestConfig);
