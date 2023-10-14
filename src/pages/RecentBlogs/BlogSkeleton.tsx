import ContentLoader from 'react-content-loader';

const BlogSkeleton: React.FC = (props: any) => {
  return (
    <ContentLoader
      speed={2}
      width={900}
      height={760}
      viewBox="0 0 760 800"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}>
      <rect x="-5" y="181" rx="35" ry="35" width="624" height="616" />
      <rect x="274" y="518" rx="0" ry="0" width="1" height="1" />
    </ContentLoader>
  );
};

export default BlogSkeleton;
