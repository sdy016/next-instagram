/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  title: "Post",
  name: "post",
  type: "document",
  fields: [
    {
      title: "Author",
      name: "author",
      type: "reference",
      to: [{ type: "user" }],
    },
    { title: "Photo", name: "photo", type: "image" },
    {
      title: "Likes",
      name: "likes",
      type: "array",
      of: [{ type: "reference", to: [{ type: "user" }] }],
      validation: (Rule) => Rule.unique(),
    },
    {
      title: "Comments",
      name: "comments",
      type: "array",
      of: [
        {
          title: "Comment",
          name: "comment",
          type: "document",
          fields: [
            {
              title: "Author",
              name: "author",
              type: "reference",
              to: [{ type: "user" }],
            },
            {
              title: "Comment",
              name: "comment",
              type: "string",
            },
          ],
        },
      ],
    },
    { title: "Email", name: "email", type: "string" },
    { title: "Image", name: "image", type: "string" },
  ],
  preview: {
    select: {
      title: "comments.0.comment",
      authorName: "author.name",
      authorUsername: "author.username",
      media: "photo",
    },
    prepare(selection) {
      const { title, authorName, media, authorUsername } = selection;
      return {
        title,
        media,
        subtitle: `by ${authorName} (${authorUsername})`,
      };
    },
  },
};
