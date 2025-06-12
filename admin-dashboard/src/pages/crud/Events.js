import DataTable from '../../components/DataTable';

const Events = () => {
  const columns = [
    { key: 'title', label: 'Title' },
    { key: 'description', label: 'Description' },
    { key: 'date', label: 'Date' },
    { key: 'location', label: 'Location' },
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
    { name: 'description', label: 'Description', type: 'textarea' },
    { name: 'date', label: 'Date', type: 'date', required: true },
    { name: 'location', label: 'Location', required: true },
    { name: 'image_url', label: 'Image', type: 'image' },
  ];

  return (
    <DataTable
      tableName="events"
      columns={columns}
      formFields={formFields}
      title="Events"
    />
  );
};

export default Events; 