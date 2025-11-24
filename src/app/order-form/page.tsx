import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import OrderFormInteractive from './components/OrderFormInteractive';

export const metadata: Metadata = {
  title: 'Formulir Pemesanan - Brandify Palembang',
  description: 'Pesan layanan desain grafis profesional untuk UMKM Anda. Isi formulir pemesanan untuk memulai transformasi brand bisnis Anda bersama Brandify Palembang.',
};

export default function OrderFormPage() {
  return (
    <>
      <Header />
      <OrderFormInteractive />
    </>
  );
}