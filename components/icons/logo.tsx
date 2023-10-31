import Image from 'next/image';
import Logo from 'public/images/logo.png';

export default function LogoIcon(props: React.ComponentProps<'svg'>) {
  return (
    <div className={props.className}>
      <Image src={Logo} alt="Logo" sizes="100vw" objectFit="cover" layout="responsive" />
    </div>
  );
}
