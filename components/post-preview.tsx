import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import Link from 'next/link'
import { Author, Imgix } from 'interfaces';

type PostPreviewProps = {
  title: string,
  coverImage: Imgix,
  date: string,
  excerpt: string,
  author: Author,
  slug: string,
};

const PostPreview = (props: PostPreviewProps) => {
  const {
    title,
    coverImage,
    date,
    excerpt,
    author,
    slug,
  } = props;

  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} url={coverImage.imgix_url} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <Date dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author.title} picture={author.metadata.picture.imgix_url} />
    </div>
  )
}

export default PostPreview;