import camelCase from 'camelcase'

export const request = () =>
  `nested/file.ts...${camelCase('this-file-for-real')}?`
