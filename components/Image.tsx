export interface ImageProps {
    src: string
}

export const Image = ({ src, ...props }) => {
    return <img src={`${process.env.NEXT_IMAGE_BASE_PATH}${src}`} {...props} />
}
