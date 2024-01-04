import { useEffect } from 'react';
import Post from '../apis/post';
import { useAxiosQuery } from '../utils/useAxiosQuery';
import Comment from '../apis/comment';
import Printer, { UpperConverter } from '../utils/printer';

const printer = new Printer(UpperConverter);

const IndexPage = () => {
  const { data } = useAxiosQuery({
    queryKey: ['posts'],
    queryFn: () => Post.find(),
  });

  useEffect(() => {
    Comment.find();
  }, []);

  return (
    <div>
      <p>Index Page</p>
      {data?.data.map((v) => <div key={v.id}>{printer.dobule(v.title)}</div>)}
    </div>
  );
};

export default IndexPage;
