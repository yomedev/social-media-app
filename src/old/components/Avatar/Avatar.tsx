import './Avatar.scss'
import Image, { ImageProps } from 'next/image'

export default function Avatar ({src, alt}: ImageProps) {
  return (
    <div className='avatar'>
      <Image className='avatar__image' width={40} height={40} src={src} alt={alt} />
    </div>
  )
}