import { createContext } from 'react';

export const VersionContext = createContext({color: 'color', size: 'normal'});

export  const setColor = (state) => ({
  color: state ?  'grey' : 'color'
})

export  const setSize = (state) => ({
  size: state ?  'large' : 'normal'
})