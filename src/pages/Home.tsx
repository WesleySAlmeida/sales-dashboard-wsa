import {
  AvatarsList,
  CardComponent,
  CustomChart,
  CustomTable,
  Header,
} from '@/components';
import { Container } from '@mui/material';
import { currencyConverter } from '@/utils';

function Home() {
  const mockListData = [
    {
      id: 1,
      avatar: '/dnc-avatar.svg',
      name: 'Nome sobrenome 1',
      subtitle: currencyConverter(4234.54),
    },
    {
      id: 2,
      avatar: '/dnc-avatar.svg',
      name: 'Nome sobrenome 2',
      subtitle: currencyConverter(3334.14),
    },
    {
      id: 3,
      avatar: '/dnc-avatar.svg',
      name: 'Nome sobrenome 3',
      subtitle: currencyConverter(2264.74),
    },
  ];

  const mockTableData = {
    headers: ['Name', 'Email', 'Actions'],
    rows: [
      [
        <span key="name1">Nome 1</span>,
        <span key="email1">nome1@email.com</span>,
        <button key="action1">ACTION</button>,
      ],
      [
        <span key="name2">Nome 2</span>,
        <span key="email2">nome2@email.com</span>,
        <button key="action2">ACTION</button>,
      ],
      [
        <span key="name3">Nome 3</span>,
        <span key="email3">nome3@email.com</span>,
        <button key="action3">ACTION</button>,
      ],
    ],
  };

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponent>CARD</CardComponent>
        <CardComponent>
          <AvatarsList listData={mockListData} />
        </CardComponent>
        <CardComponent>
          <CustomTable
            headers={mockTableData.headers}
            rows={mockTableData.rows}
          />
        </CardComponent>
        <CardComponent>
          <CustomChart
            labels={['Jan', 'Fev', 'Marc', 'Abr', 'Mai']}
            data={[1000.12, 2456.54, 986.32, 654.89, 754.89, 354.89]}
            type="bar"
          />
        </CardComponent>
      </Container>
    </>
  );
}

export default Home;
