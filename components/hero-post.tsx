import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import Link from 'next/link'
import { Author, Imgix } from 'interfaces';


type HeroPostProps = {
  title: string,
  coverImage: Imgix;
  date: string,
  excerpt: string,
  author: Author,
  slug: string,
};

const HeroPost = (props: HeroPostProps) => {
  const {
    title,
    coverImage,
    date,
    excerpt,
    author,
    slug
  } = props;

  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} url={coverImage.imgix_url} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          <Avatar
            name={author.title}
            picture={author.metadata.picture.imgix_url}
          />
        </div>
      </div>
    </section>
  )
}

export default HeroPost;