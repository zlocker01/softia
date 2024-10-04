import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

function loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <p className="text-white font-bold">Cargando...</p>
    </div>
  );
}

export default loading;
