import clsx from 'clsx';
import LogoIcon from './icons/logo';

export default function LogoSquare({ size }: { size?: 'sm' | undefined }) {
  return (
    <div
      className={clsx(
        'flex flex-none items-center justify-center border-neutral-200 dark:border-neutral-700',
        {
          'h-42 w-42 rounded-xl': !size,
          'h-28 w-28 rounded-lg': size === 'sm'
        }
      )}
    >
      <LogoIcon
        className={clsx({
          'h-44 w-44': !size,
          'h-20 w-20': size === 'sm'
        })}
      />
    </div>
  );
}
