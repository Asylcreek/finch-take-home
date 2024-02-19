import localFont from 'next/font/local';

export const metropolis = localFont({
  src: [
    {
      path: '../font-files/Metropolis-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../font-files/Metropolis-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../font-files/Metropolis-Bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-metropolis',
});
