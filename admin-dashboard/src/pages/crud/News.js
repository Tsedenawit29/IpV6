import DataTable from '../../components/DataTable';

const News = () => {
  const columns = [
    { key: 'title', label: 'Title' },
    { key: 'content', label: 'Content' },
    {
      key: 'image_url',
      label: 'Image',
      render: (item) => (
        item.image_url ? (
          <img
            src={item.image_url}
            alt={item.title}
            className="h-10 w-10 object-cover rounded"
          />
        ) : 'No image'
      ),
    },
    {
      key: 'created_at',
      label: 'Created At',
      render: (item) => new Date(item.created_at).toLocaleDateString(),
    },
  ];

  const formFields = [
    { name: 'title', label: 'Title', required: true },
    { name: 'content', label: 'Content', type: 'textarea' },
    { name: 'image_url', label: 'Image', type: 'image' },
  ];

  return (
    <DataTable
      tableName="news"
      columns={columns}
      formFields={formFields}
      title="News"
    />
  );
};

export default News; 