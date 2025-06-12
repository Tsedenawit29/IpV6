import DataTable from '../../components/DataTable';

const ContactMessages = () => {
  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'message', label: 'Message' },
    {
      key: 'created_at',
      label: 'Received At',
      render: (item) => new Date(item.created_at).toLocaleDateString(),
    },
  ];

  return (
    <DataTable
      tableName="contact_messages"
      columns={columns}
      title="Contact Messages"
      disableAddNew={true}
    />
  );
};

export default ContactMessages; 