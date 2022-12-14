import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import type Author from '../interfaces/author'
import { TwitterShareButton } from 'react-twitter-embed'
import { useRouter } from 'next/router'
import { getFullyQualifiedUrl } from './Image'

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
}

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  const router = useRouter()
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-lg">
          <div className="flex lg:flex-row lg:w-1/2 gap-5">
            <DateFormatter dateString={date} />
            <TwitterShareButton url={getFullyQualifiedUrl(router.asPath)} />
          </div>
        </div>
      </div>
    </>
  )
}

export default PostHeader
