import { Howl } from 'howler';

export const playEngineSound = () => {
  const sound = new Howl({ src: ['/sounds/engine-start.mp3'] });
  sound.play();
};