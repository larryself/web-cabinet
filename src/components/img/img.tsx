import Image from 'next/image';
import { ImgProps } from '../../types';

const Img = ({ logo, width, height, alt }: ImgProps) => (
  <Image src={logo} width={width} height={height} alt={alt} priority />
);
export default Img;
