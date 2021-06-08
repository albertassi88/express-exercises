const mockPosts = [
    {
      title: 'título fake',
      content: 'conteúdo conteúdo conteúdo conteúdo conteúdo',
    },
    {
      title: 'título fake',
      content: 'conteúdo conteúdo conteúdo conteúdo conteúdo',
    },
    {
      title: 'título fake',
      content: 'conteúdo conteúdo conteúdo conteúdo conteúdo',
    },
    {
      title: 'título fake',
      content: 'conteúdo conteúdo conteúdo conteúdo conteúdo',
    },
];
  
const getPost = (req, res, next) => {
  res.status(200).json({ mockPosts });
};
  
module.exports = getPost;
  