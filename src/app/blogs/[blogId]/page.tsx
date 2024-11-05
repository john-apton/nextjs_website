import React from 'react';

interface BlogPageProps {
  params: {
    blogId: number;
  };
}

export default function BlogPage(props: BlogPageProps) {
  const { params } = props;
  return <div>BlogPage - {params?.blogId}</div>;
}
