import { ImgProps } from '../../types';

export const Img = ({ logo, width, height, alt }: ImgProps) => (
  <img src={logo} width={width} height={height} alt={alt} />
);
