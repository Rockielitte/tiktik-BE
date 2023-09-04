export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'video',
      title: 'Video',
      type: 'string',
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'postedBy',
      title: 'PostedBy',
      type: 'postedBy',
    },
    {
      name: 'comments',
      title: 'Comments',
      type: 'array',
      of: [
        {
          type: 'comment',
        },
      ],
    },
    {
      name: 'likes',
      title: 'Likes',
      type: 'array',
      of: [
        {
          type: 'postedBy',
        },
      ],
    },
  ],
}
