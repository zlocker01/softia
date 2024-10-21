import { Title } from '@/components/navegation/Title';
import { InfoDialog } from '@/components/navegation/InfoDialog';

const page = async () => {
  return (
    <div className="text-center">
      <Title text={'Agenda'} />
      <InfoDialog description="Edit soon" />
    </div>
  );
};

export default page;
