export interface ImageProps {
    src: string
}

export const Image = ({ src, ...props }) => {
    return <img src={getImagePath(src)} {...props} />
}

export function getImagePath(src: any): string {
    return `${process.env.NEXT_IMAGE_BASE_PATH || ''}${src}`
}

