import React from 'react';

interface ICircularImageProp {
  image: string;
  size: string;
  title?: string;
  sizeTitle?: 'sm' | 'md' | 'lg';
  hasBorder?: boolean;
}

const CircularImage = ({ title, image, size, sizeTitle, hasBorder }: ICircularImageProp) => {
  let styledImag = { borderRadius: '50%', border: '#c2d6d6 5px solid' };
  styledImag = hasBorder ? styledImag : { ...styledImag, border: '' };
    
  return (
    <div style={{ textAlign: 'center' }}>
      <img src={image} alt='Avatar' style={styledImag} width={size} height={size} />
      <br />
      {sizeTitle === undefined && <h3 style={{ textTransform: 'capitalize' }}>{title}</h3>}
      {sizeTitle === 'lg' && <h1 style={{ textTransform: 'capitalize' }}>{title}</h1>}
      {sizeTitle === 'md' && <h3 style={{ textTransform: 'capitalize' }}>{title}</h3>}
      {sizeTitle === 'sm' && <h5 style={{ textTransform: 'capitalize' }}>{title}</h5>}
    </div>
  );
};

export default CircularImage;
