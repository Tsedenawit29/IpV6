import DataTable from '../../components/DataTable';

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'subject', label: 'Subject' },
  { key: 'message', label: 'Message' },
  {
    key: 'submitted_at',
    label: 'Received At',
    render: (item) => new Date(item.submitted_at).toLocaleString(),
  },
  ];

  return (
    <DataTable
      tableName="ipv6_contact_messages"
      columns={columns}
      title="Contact Messages"
      disableAddNew={true}
    />
  );
};

export default ContactMessages; 