export interface ImageProps {
    src: string
}

export const Image = ({ src, ...props }) => {
    return <img src={getImagePath(src)} {...props} />
}

export function getImagePath(src: any): string {
    return `${process.env.NEXT_PUBLIC_IMAGE_BASE_PATH || ''}${src}`
}

export function getFullyQualifiedImagePath(src: any): string {
    return getFullyQualifiedUrl(getImagePath(src));
}

export function getFullyQualifiedUrl(url: string): string {
    return `${process.env.NEXT_PUBLIC_SITE_DOMAIN || ''}${url}`
}

