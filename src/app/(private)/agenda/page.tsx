import { Title } from '@/components/navegation/Title';
import { InfoDialog } from '@/components/navegation/InfoDialog';
import { MyCalendar } from '@/components/agenda/Calendar';

const page = async () => {
  return (
    <div className="text-center">
      <Title text={'Agenda'} />
      <InfoDialog description="Visualiza tu agenda de citas con actualizaciones en timepo real" />
      <MyCalendar />
    </div>
  );
};

export default page;
