import { createContext } from 'react';

let letColor = 'color'
let letSize = 'normal'

export const setColor = (state) => {
  letColor = state ? 'grey' : 'color'
}
export const setSize = (state) => {
  letSize = state ? 'normal' : 'large'
}
export const VersionContext = createContext({color: letColor, size: letSize});



