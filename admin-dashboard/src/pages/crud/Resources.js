import DataTable from '../../components/DataTable';

const Resources = () => {
  const columns = [
    { key: 'title', label: 'Title' },
    { key: 'category', label: 'Category' },
    { key: 'content', label: 'Content' },
    {
      key: 'file_url',
      label: 'File',
      render: (item) => (
        item.file_url ? (
          <a
            href={item.file_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary-light dark:text-secondary-dark hover:text-opacity-80"
          >
            View File
          </a>
        ) : 'No file'
      ),
    },
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
    {
      name: 'category',
      label: 'Category',
      type: 'select',
      options: [
        'For the Public',
        'For Network Engineers',
        'For Policy Makers',
        'Training Materials',
      ],
      required: true,
    },
    { name: 'content', label: 'Content', type: 'textarea' },
    { name: 'file_url', label: 'File', type: 'file' },
    { name: 'image_url', label: 'Image', type: 'image' },
  ];

  return (
    <DataTable
      tableName="resources"
      columns={columns}
      formFields={formFields}
      title="Resources"
    />
  );
};

export default Resources; 