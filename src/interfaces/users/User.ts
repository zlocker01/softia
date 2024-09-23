export interface User {
  id: string;
  nombre: string;
  email: string;
  telefono: string;
  foto_perfil: string;
  fecha_creacion: Date;
  ultimo_acceso: Date;
  pagado: boolean;
}
