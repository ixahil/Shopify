import clsx from 'clsx';
import Price from './price';

const Label = ({
  title,
  amount,
  currencyCode,
  position = 'bottom'
}: {
  title: string;
  amount: string;
  currencyCode: string;
  position?: 'bottom' | 'center';
}) => {
  return (
    <div
      className={clsx('absolute bottom-0 left-0 right-0 flex w-full px-4 pb-4', {
        'lg:px-20 lg:pb-[35%]': position === 'center'
      })}
    >
      <div className="flex flex-wrap items-center gap-4 rounded-full border bg-white/70 p-1 px-16 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
        <h3 className="line-clamp-2 flex-grow leading-none tracking-tight">{title}</h3>
        <Price
          className="flex-none rounded-full bg-accent p-2 text-white"
          amount={amount}
          currencyCode={currencyCode}
          currencyCodeClassName="hidden @[275px]/label:inline"
        />
      </div>
    </div>
  );
};

export default Label;
